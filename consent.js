/* Grantu Radars – sīkdatņu piekrišana. Reklāmu/statistikas kodi ielādējas TIKAI pēc piekrišanas.
   Kodu ID ieraksta šeit, kad būs konti (t55). Tukšs ID = neko neielādē. */
(function(){
  var CFG={metaPixel:"1315279077344835",googleTag:""}; // piem. metaPixel:"1234567890", googleTag:"AW-123456789"
  var KEY="gr-consent", MAX=1000*60*60*24*182;
  function read(){try{var v=JSON.parse(localStorage.getItem(KEY));if(v&&Date.now()-v.t<MAX)return v}catch(e){}return null}
  function save(st,ad){var v={st:!!st,ad:!!ad,t:Date.now()};try{localStorage.setItem(KEY,JSON.stringify(v))}catch(e){}apply(v);hide()}
  function load(src,cb){var s=document.createElement("script");s.async=true;s.src=src;if(cb)s.onload=cb;document.head.appendChild(s)}
  var loaded={};
  function apply(v){
    if(!v)return;
    if(CFG.googleTag&&(v.st||v.ad)&&!loaded.g){loaded.g=1;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
      gtag("consent","default",{ad_storage:"denied",analytics_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
      gtag("consent","update",{analytics_storage:v.st?"granted":"denied",ad_storage:v.ad?"granted":"denied",ad_user_data:v.ad?"granted":"denied",ad_personalization:v.ad?"granted":"denied"});
      gtag("js",new Date());gtag("config",CFG.googleTag);load("https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(CFG.googleTag))}
    if(CFG.metaPixel&&v.ad&&!loaded.m){loaded.m=1;!function(f,b,e,v2,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v2;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init",CFG.metaPixel);fbq("track","PageView")}
  }
  var box;
  function hide(){if(box){box.remove();box=null}}
  function show(){
    hide();var v=read()||{st:false,ad:false};
    box=document.createElement("div");box.className="grc";box.setAttribute("role","dialog");box.setAttribute("aria-label","Sīkdatņu izvēle");
    box.innerHTML='<style>.grc{position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:560px;margin:0 auto;background:#0f1b2d;color:#e8eef6;border:1px solid #2a3a52;border-radius:14px;padding:16px;font:14px/1.45 system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35)}.grc p{margin:0 0 10px}.grc a{color:#7fd6a8}.grc .b{display:flex;gap:8px;flex-wrap:wrap}.grc button{flex:1 1 140px;font:inherit;font-weight:600;padding:10px 12px;border-radius:9px;border:1px solid #3b4d68;background:#18283f;color:#e8eef6;cursor:pointer}.grc label{display:flex;gap:8px;align-items:flex-start;margin:6px 0}.grc .s{display:none;margin:0 0 10px}.grc.o .s{display:block}.grc small{display:block;color:#a9b6c8}</style>'
     +'<p>Mēs izmantojam sīkdatnes. Nepieciešamās vajadzīgas, lai lapa strādātu. Ar jūsu atļauju izmantosim arī statistikas un reklāmas sīkdatnes, lai saprastu, kā lapu lieto, un rādītu mūsu reklāmas Google, Facebook un Instagram. Izvēli varat mainīt jebkurā laikā lapas apakšā. <a href="/privatuma-politika.html">Vairāk – privātuma politikā</a></p>'
     +'<div class="s"><label><input type="checkbox" checked disabled> <span><b>Nepieciešamās</b><small>Vajadzīgas, lai lapa un pieteikuma forma strādātu. Tās nevar izslēgt.</small></span></label>'
     +'<label><input type="checkbox" id="grc-st"'+(v.st?" checked":"")+'> <span><b>Statistika</b><small>Palīdz saprast, cik cilvēku apmeklē lapu un kuras sadaļas lasa. Dati ir apkopoti.</small></span></label>'
     +'<label><input type="checkbox" id="grc-ad"'+(v.ad?" checked":"")+'> <span><b>Reklāma</b><small>Ļauj Google un Meta (Facebook, Instagram) saprast, vai mūsu reklāma ir palīdzējusi, un rādīt to cilvēkiem, kuriem tā varētu interesēt.</small></span></label></div>'
     +'<div class="b"><button type="button" data-a="all">Piekrītu visām</button><button type="button" data-a="min">Tikai nepieciešamās</button><button type="button" data-a="set">Iestatījumi</button></div>';
    box.addEventListener("click",function(e){var a=e.target.getAttribute&&e.target.getAttribute("data-a");if(!a)return;
      if(a==="all")save(true,true);else if(a==="min")save(false,false);
      else if(!box.classList.contains("o")){box.classList.add("o");e.target.textContent="Saglabāt izvēli"}
      else save(document.getElementById("grc-st").checked,document.getElementById("grc-ad").checked)});
    document.body.appendChild(box);
  }
  document.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest("[data-cookie-settings]");if(t){e.preventDefault();show()}});
  function init(){var v=read();if(v)apply(v);else show()}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
