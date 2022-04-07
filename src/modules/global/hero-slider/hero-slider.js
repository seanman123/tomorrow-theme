export default el => {
  console.log('2')
  var heroSliderContainer = document.querySelector('.hero-slider-carousel')
  var heroSlider = new Flickity(heroSliderContainer, {
    cellAlign: 'left',
    pageDots: false,
    pageArrows: false,
    sync: '.hero-slider-pagination-carousel',
    autoPlay: true
  })

  var heroSliderPagination = document.querySelector('.hero-slider-pagination-carousel')
  var heroSliderYears = new Flickity(heroSliderPagination, {
    cellAlign: 'left',
    pageDots: false,
    pageArrows: false
  })
}
