export default (el) => {
  const productContainer = document.querySelector('.product-carousel');
  const cardAtcButtons = document.querySelectorAll('.middle-cta');
  const productCards = document.querySelectorAll('.section-featured-products__card');
  const productCardContainer = document.querySelector('.section-featured-products__products-container ');

  // Initialize Flickity only if productcards > 2
  if (productCards.length > 2) {
    new Flickity(productContainer, {
      wrapAround: true,
      cellAlign: 'center',
      pageDots: false,
      selectedAttraction: 0.3,
      friction: 0.8,
    });
  } else {
    // Add back in a flex to the container
    productCardContainer.style.display = 'flex';
  }

  // Add click listener to ATC button
  cardAtcButtons.forEach((button) => {
    const variantId = button.dataset.variantId;

    const data = {
      items: [{
       id: variantId,
       quantity: 1
       }]
     };

    button.addEventListener('click', () => {
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
};
