(() => {
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const close = document.querySelector('.drawer-close');

  if (!toggle || !drawer || !backdrop || !close) return;

  const openMenu = () => {
    drawer.classList.add('open');
    backdrop.hidden = false;
    document.body.classList.add('menu-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    close.focus();
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    backdrop.hidden = true;
    document.body.classList.remove('menu-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.focus();
  };

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100 && drawer.classList.contains('open')) closeMenu();
  });
})();
