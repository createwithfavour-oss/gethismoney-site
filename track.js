// Analytics for all of gethismoney.xyz: Google Analytics, PostHog and Microsoft Clarity.
// Every page on the domain loads this one file (HIT and the cohort page by full URL), so the IDs live here only.
// Loads on the first scroll, tap or key press, or 5 seconds after the page finishes, so it never competes with the page loading.
// Leave an ID empty and that tool stays off.
const GA_ID = "G-Q839RX4HGX";
const POSTHOG_KEY = "phc_rWeXeQehcdnUnMN6yeiwaxwBSznFYpxN8FVuvPrrSF6n";
const POSTHOG_HOST = "https://eu.i.posthog.com";
const CLARITY_ID = "yp948myw1l";

// Pages call hitTrack("read_done") etc. Events wait here until the tools load.
const queue = [];
window.hitTrack = (name, props) => queue.push([name, props || {}]);

function send(name, props) {
  if (window.gtag) window.gtag("event", name, props);
  if (window.posthog) window.posthog.capture(name, props);
  if (window.clarity) window.clarity("event", name);
}

function load() {
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.append(s);
  }

  if (POSTHOG_KEY) {
    // PostHog's own loader, unchanged.
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    // Events and funnels only. Clarity does the recordings, so PostHog's recorder, surveys and speed monitor stay off.
    window.posthog.init(POSTHOG_KEY, { api_host: POSTHOG_HOST, person_profiles: "identified_only", disable_session_recording: true, disable_surveys: true, capture_performance: false, capture_dead_clicks: false });
  }

  if (CLARITY_ID) {
    // Clarity's own loader, unchanged. It hides typed text by default.
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",CLARITY_ID);
  }

  window.hitTrack = send;
  queue.splice(0).forEach(([name, props]) => send(name, props));
}

// Tip clicks, from any page.
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href*="bachs.io"]');
  if (a) window.hitTrack("tip_clicked", { page: location.pathname });
});

let started = false;
const TRIGGERS = ["scroll", "pointerdown", "keydown", "touchstart"];
function start() {
  if (started) return;
  started = true;
  TRIGGERS.forEach((t) => removeEventListener(t, start));
  load();
}
TRIGGERS.forEach((t) => addEventListener(t, start, { once: true, passive: true }));
if (document.readyState === "complete") setTimeout(start, 5000); else addEventListener("load", () => setTimeout(start, 5000));
