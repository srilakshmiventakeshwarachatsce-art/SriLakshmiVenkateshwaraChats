/* Cookie consent + consent-gated Google Maps loader.
   DPDP Act 2023 / GDPR friendly: no third-party map cookies until the visitor opts in. */
(function () {
  var KEY = 'slv_consent_v1';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var banner;

  function loadMap() {
    var box = document.querySelector('[data-map]');
    if (!box || box.dataset.loaded) return;
    var src = box.getAttribute('data-map-src');
    var f = document.createElement('iframe');
    f.title = 'Map to Sri Lakshmi Venkateshwara Chats Centre';
    f.loading = 'lazy';
    f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    f.src = src;
    f.style.cssText = 'width:100%;height:260px;border:0;border-radius:14px;display:block';
    box.innerHTML = '';
    box.appendChild(f);
    box.dataset.loaded = '1';
  }

  function showMapPlaceholder() {
    var box = document.querySelector('[data-map]');
    if (!box || box.dataset.loaded) return;
    box.innerHTML =
      '<div class="map-ph"><p>🗺️ The interactive map uses Google Maps cookies. ' +
      'Load it to see directions — or use the button below.</p>' +
      '<button type="button" class="map-load-btn">Load interactive map</button></div>';
    box.querySelector('.map-load-btn').addEventListener('click', function () {
      set('all'); loadMap(); hideBanner();
    });
  }

  function hideBanner() { if (banner) banner.hidden = true; }
  function showBanner() { if (banner) banner.hidden = false; }
  function acceptAll() { set('all'); hideBanner(); loadMap(); }
  function acceptNecessary() { set('necessary'); hideBanner(); showMapPlaceholder(); }

  document.addEventListener('DOMContentLoaded', function () {
    banner = document.getElementById('cookie-consent');
    var c = get();
    if (c === 'all') { loadMap(); }
    else if (c === 'necessary') { showMapPlaceholder(); }
    else { showBanner(); showMapPlaceholder(); }

    var a = document.getElementById('cc-accept');
    var n = document.getElementById('cc-necessary');
    if (a) a.addEventListener('click', acceptAll);
    if (n) n.addEventListener('click', acceptNecessary);
    Array.prototype.forEach.call(document.querySelectorAll('[data-cookie-settings]'), function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); showBanner(); });
    });
  });

  window.SLVConsent = { open: showBanner };
})();
