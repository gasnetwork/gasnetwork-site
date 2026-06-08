// Gás Network Engenharia — interações
(function () {
  // Menu mobile
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('mobilePanel');
  var overlay = document.getElementById('overlay');
  var closeBtn = document.querySelector('.mobile-panel .close');
  function openMenu() { panel.classList.add('open'); overlay.classList.add('open'); }
  function closeMenu() { panel.classList.remove('open'); overlay.classList.remove('open'); }
  if (burger) burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (panel) panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
    });
  });
})();

/* ---- Navegação ativa (marca a página atual) ---- */
(function () {
  var p = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a, .nav-item > a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('/').pop();
    if (href && href === p) a.classList.add('active');
  });
})();

/* ---- Rastreamento de conversões (WhatsApp / Ligar / Formulário) ---- */
function gnTrack(ev) {
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: ev }); if (window.gtag) gtag('event', ev); } catch (e) {}
}
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a'); if (!a) return;
  var h = a.getAttribute('href') || '';
  if (h.indexOf('wa.me') > -1) gnTrack('whatsapp_click');
  else if (h.indexOf('tel:') === 0) gnTrack('ligar_click');
});

/* ---- Dropdowns acessíveis (foco/teclado + aria-expanded) ---- */
(function () {
  document.querySelectorAll('.nav-item.has-drop').forEach(function (item) {
    var trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    function set(open) { trigger.setAttribute('aria-expanded', open ? 'true' : 'false'); item.classList.toggle('focus-open', open); }
    item.addEventListener('mouseenter', function () { set(true); });
    item.addEventListener('mouseleave', function () { set(false); });
    item.addEventListener('focusin', function () { set(true); });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) set(false); });
    item.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); trigger.focus(); } });
  });
})();
