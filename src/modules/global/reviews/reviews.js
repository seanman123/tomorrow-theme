export default el => {
  var ratings = document.getElementsByClassName('rating')

  for (var i = 0; i < ratings.length; i++) {
    var rating = ratings[i].getAttribute('data-rating') / 5
    var ratingContainer = ratings[i].querySelector('.rating-icons')
    var ratingContainerWidth = ratingContainer.offsetWidth
    ratings[i].style.width = ratingContainerWidth * rating + 'px'
  }
}
