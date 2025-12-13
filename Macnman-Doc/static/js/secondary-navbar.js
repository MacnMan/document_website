window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.secondary-navbar-link');

  if (navLinks.length > 0) {
    const bar = document.createElement('div');
    bar.className = 'secondary-navbar';

    navLinks.forEach((link) => {
      const clone = link.cloneNode(true) as HTMLAnchorElement;
      bar.appendChild(clone);
    });

    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.insertAdjacentElement('afterend', bar);
    }
  }
});
    