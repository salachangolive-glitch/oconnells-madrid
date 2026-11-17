/** Hides [data-show-until] blocks after the Madrid calendar day (matches Dubliners agenda rule). */
export function HomeShowUntilScript() {
  const script = `(function(){
  function madridTodayYmd(now){
    try{return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}catch(e){return null;}
  }
  function run(){
    var todayYmd=madridTodayYmd(new Date());
    var timed=document.querySelectorAll('[data-show-until]');
    for(var k=0;k<timed.length;k++){
      var until=timed[k].getAttribute('data-show-until');
      timed[k].hidden=!todayYmd||todayYmd>until;
    }
  }
  run();
  setInterval(run,60000);
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')run();});
})();`;
  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: script }} />;
}