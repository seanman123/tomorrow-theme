export default el => {
  alert('hi');
  var elem = document.querySelector('.featured-products-carousel')
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    wrapAround: true,
    pageDots: false
    //   arrowShape: 'M4.74456 9.74457L6.16994 8.31912L3.85884 6.00802L32 6.00802L32 3.99212L3.85884 3.99211L6.16994 1.68095L4.74456 0.255497L-3.39992e-06 5.00006L4.74456 9.74457'
  })
}
