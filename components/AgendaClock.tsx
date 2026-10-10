/**
 * Client clock for the agenda (Today/Hoy, Next 7 days, Home/Sports strip).
 * Plain inline script, no React state: it reads data-start / data-end /
 * data-day on every row and writes one <style> with show/hide rules, so it
 * works on the static HTML before and after hydration and on client-side
 * navigation. Same rules as lib/fixtures.ts (isTodaySlot / isWeekSlot):
 *   - finished (now >= data-end)            → hidden everywhere
 *   - Today: data-day == Madrid today, or already on (start <= now < end)
 *   - Next 7 days: later Madrid date, <= today + 7
 *   - strip / any: Today + Next 7 days (first N when data-fx-limit is set)
 *   - data-fx-wrap: hide the whole block when none of its rows is visible
 * All dates are Europe/Madrid, whatever the visitor's device zone is.
 */
const SCRIPT = `(function(){
var TZ="Europe/Madrid";
var fmt=new Intl.DateTimeFormat("en-CA",{timeZone:TZ,year:"numeric",month:"2-digit",day:"2-digit"});
function ymd(ms){return fmt.format(new Date(ms));}
function addDays(d,n){var p=d.split("-");return new Date(Date.UTC(+p[0],+p[1]-1,+p[2]+n,12)).toISOString().slice(0,10);}
function esc(s){return String(s).replace(/["\\\\]/g,"\\\\$&");}
function run(){
 var now=Date.now(),today=ymd(now),end=addDays(today,7),css=[];
 var roots=document.querySelectorAll("[data-fx-root]");
 for(var r=0;r<roots.length;r++){
  var root=roots[r],limit=+(root.getAttribute("data-fx-limit")||0),shown={};
  var rows=root.querySelectorAll("[data-fx-key]");
  for(var i=0;i<rows.length;i++){
   var el=rows[i],k=el.getAttribute("data-fx-key"),slot=el.getAttribute("data-fx-slot");
   var s=Date.parse(el.getAttribute("data-start")),e=Date.parse(el.getAttribute("data-end")),day=el.getAttribute("data-day");
   var live=!(e<=now),on=s<=now&&now<e;
   var isToday=live&&(day===today||on);
   var isWeek=live&&!isToday&&day>today&&day<=end;
   var vis=slot==="today"?isToday:slot==="week"?isWeek:(isToday||isWeek);
   if(vis&&limit&&(shown[slot]||0)>=limit)vis=false;
   if(vis)shown[slot]=(shown[slot]||0)+1;
   css.push('[data-fx-key="'+esc(k)+'"]{display:'+(vis?"block":"none")+'!important}');
   css.push('[data-fx-key="'+esc(k)+'"] [data-fx-on]{display:'+(vis&&on?"inline-block":"none")+'!important}');
  }
  var wr=root.getAttribute("data-fx-wrap");
  if(wr)css.push('[data-fx-root="'+esc(root.getAttribute("data-fx-root"))+'"]{display:'+(shown[wr]?"block":"none")+'!important}');
  var ems=root.querySelectorAll("[data-fx-empty]");
  for(var j=0;j<ems.length;j++){
   var es=ems[j].getAttribute("data-fx-empty"),id=ems[j].getAttribute("data-fx-empty-id");
   css.push('[data-fx-empty-id="'+esc(id)+'"]{display:'+(shown[es]?"none":"block")+'!important}');
  }
 }
 var st=document.getElementById("oc-fx-style");
 if(!st){st=document.createElement("style");st.id="oc-fx-style";document.head.appendChild(st);}
 var txt=css.join("\\n");
 if(st.textContent!==txt)st.textContent=txt;
 document.documentElement.setAttribute("data-fx-today",today);
}
window.__ocFxRun=run;
var t=0;function soon(){if(t)return;t=setTimeout(function(){t=0;run();},50);}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
setInterval(run,60000);
document.addEventListener("visibilitychange",function(){if(!document.hidden)run();});
window.addEventListener("pageshow",run);
try{new MutationObserver(soon).observe(document.documentElement,{childList:true,subtree:true});}catch(_){}
})();`;

export function AgendaClock() {
  return (
    <script
      id="oc-agenda-clock"
      dangerouslySetInnerHTML={{ __html: SCRIPT }}
    />
  );
}
