export default el => {
  const hamburgerButton = document.querySelector('#icon-hamburger');
  const closeButton = document.querySelector('.close-button');
  const menu = document.querySelector('.section-header__menu');

  hamburgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
  });

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 985) {
      menu.classList.remove('active');
    }
  })
}