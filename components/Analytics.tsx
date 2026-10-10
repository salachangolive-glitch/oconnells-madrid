import { CONSENT_EVENT, CONSENT_STORAGE_KEY, ga4Id } from "@/lib/analytics";

/**
 * Consent Mode v2: everything denied by default. gtag.js is requested from
 * Google only after the visitor accepts (or accepted before). Renders nothing
 * while GA4_MEASUREMENT_ID is empty.
 */
export function Analytics() {
  const id = ga4Id();
  if (!id) return null;
  const code = `(function(){
var ID=${JSON.stringify(id)},KEY=${JSON.stringify(CONSENT_STORAGE_KEY)};
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
window.gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
function read(){try{return window.localStorage.getItem(KEY);}catch(e){return null;}}
var loaded=false;
function load(){
if(loaded)return;loaded=true;window.__ocAnalyticsGranted=true;
window.gtag('consent','update',{analytics_storage:'granted'});
window.gtag('js',new Date());
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID);document.head.appendChild(s);
window.gtag('config',ID);
}
if(read()==='granted')load();
document.addEventListener(${JSON.stringify(CONSENT_EVENT)},function(e){if(e&&e.detail==='granted')load();});
})();`;
  return (
    <script
      id="oc-ga4-consent"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
