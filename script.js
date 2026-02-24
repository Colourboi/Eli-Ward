(function () {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const yearEl = document.getElementById('year');

  // Header scroll state
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (menuToggle && nav) {
    const breakpoint = 768;
    function isMobile() {
      return window.innerWidth < breakpoint;
    }

    function showToggle() {
      menuToggle.removeAttribute('hidden');
    }
    function hideToggle() {
      menuToggle.setAttribute('hidden', '');
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (isMobile()) showToggle();
    window.addEventListener('resize', function () {
      if (isMobile()) showToggle();
      else hideToggle();
    });

    menuToggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMobile()) {
          nav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Current nav link (for multi-page)
  if (nav) {
    const path = window.location.pathname;
    nav.querySelectorAll('a').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const isHome = href === 'index.html' || href === '';
      const isCurrent = isHome
        ? path === '/' || path === '' || path.endsWith('/') || path.endsWith('index.html')
        : path.endsWith(href);
      link.classList.toggle('current', isCurrent);
    });
  }
})();
