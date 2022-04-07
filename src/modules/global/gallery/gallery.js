export default el => {
  var galleryContainer = document.querySelector('.gallery-carousel')
  var gallerySlider = new Flickity(galleryContainer, {
    cellAlign: 'left',
    wrapAround: true,
    pageDots: false
  })
}
