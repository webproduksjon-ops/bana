(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

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

  const sent = new URLSearchParams(window.location.search).get('sent');
  const status = document.querySelector('[data-form-status]');
  if (sent === '1' && status) status.textContent = 'Takk — forespørselen er sendt. Vi tar kontakt så snart vi kan.';
})();
