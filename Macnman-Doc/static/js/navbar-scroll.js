document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  const navbar = document.querySelector('.navbar');
  if (!(navbar instanceof HTMLElement)) {
    console.log('Navbar element not found or invalid.');
    return;
  }

  console.log('Navbar found:', navbar);

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll position:', scrollTop);

    if (scrollTop > lastScrollTop) {
      console.log('Scrolling down');
      navbar.style.transform = 'translateY(-100%)';
    } else {
      console.log('Scrolling up');
      navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
