export default (el) => {
  const listeners = ['resize', 'load'];
  const cardContainer = document.querySelector('.card-carousel');
  const initFlickity = () =>  new Flickity(cardContainer, {
    cellAlign: 'left',
    pageDots: false,
    wrapAround: false
  });

  // Initialize Flickity and destroy at certain media-query
  listeners.forEach((listener) => {
    window.addEventListener((listener), () => {
      const flickity = initFlickity();
      if (window.innerWidth >= 890) {
        flickity.destroy();
      }
    });
  });
};
