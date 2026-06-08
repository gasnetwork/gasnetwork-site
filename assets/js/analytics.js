/* Gás Network — Analytics (GA4) e rastreamento de conversões.
   COLE seu ID do GA4 abaixo (ex.: G-XXXXXXXXXX). Vazio = não carrega. */
var GN_GA_ID = "";
(function () {
  if (!GN_GA_ID) return;
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GN_GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date()); gtag('config', GN_GA_ID);
})();
