// Basic enhancements for Snack Rouge site
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!opened));
      nav.classList.toggle('is-open');
    });
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Lightweight client-side validation
  const form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach((el) => {
        if (!el.value || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))) {
          el.classList.add('input--error');
          valid = false;
        } else {
          el.classList.remove('input--error');
        }
      });
      if (!valid) {
        e.preventDefault();
        alert('未入力、または形式が正しくない項目があります。ご確認ください。');
      }
    });
  }
})();

