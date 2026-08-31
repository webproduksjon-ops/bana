(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');

  const updateHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('span').textContent = open ? '×' : '＋';
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('span').textContent = '＋';
    }));
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Forespørsel fra ${data.get('name')}`);
      const body = encodeURIComponent(`Navn: ${data.get('name')}\nE-post: ${data.get('email')}\n\n${data.get('message')}`);
      window.location.href = `mailto:hei@abcbygg.no?subject=${subject}&body=${body}`;
      if (status) status.textContent = 'E-postklienten åpnes med meldingen ferdig utfylt.';
    });
  }
})();
