// Basic enhancements for Snack Rouge site
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };
    const openNav = () => {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    };
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') === 'true';
      opened ? closeNav() : openNav();
    });
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        closeNav();
      }
    });
    // Close when clicking outside nav
    document.addEventListener('click', (e) => {
      const target = e.target;
      const isOpen = nav.classList.contains('is-open');
      if (!isOpen) return;
      if (target === toggle || toggle.contains(target)) return;
      if (target === nav || nav.contains(target)) return;
      closeNav();
    });
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
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
        return;
      }

      // Build a prefilled mailto for better UX on mobile
      try {
        e.preventDefault();
        const data = new FormData(form);
        const to = (form.getAttribute('action') || '').replace('mailto:', '') || 'info@rouge-snack.jp';
        const subjectRaw = data.get('subject')?.toString().trim() || '【予約・お問い合わせ】スナック ルージュ';
        const lines = [];
        const push = (label, key) => {
          const v = data.get(key);
          if (v) lines.push(`${label}: ${v}`);
        };
        push('お名前', 'name');
        push('メール', 'email');
        push('電話', 'phone');
        push('希望日', 'date');
        push('希望時間', 'time');
        push('人数', 'people');
        const msg = (data.get('message') || '').toString();
        if (msg) {
          lines.push('---');
          lines.push(msg);
        }
        const bodyRaw = lines.join('\r\n');
        const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subjectRaw)}&body=${encodeURIComponent(bodyRaw)}`;
        window.location.href = mailto;
        const status = document.getElementById('form-status');
        if (status) {
          status.style.display = '';
          status.textContent = 'メール作成画面を開いています。開かない場合は上部の「電話する」をご利用ください。';
        }
      } catch (_) {
        // Fallback: allow default behavior
      }
    });
  }
})();
