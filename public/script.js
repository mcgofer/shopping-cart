// an array with all of our cart items
var cart = [];
var item = { name: $('.item').data().name, price: $('.item').data().price };




var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var cartTotal = 0;

  //handlebars template
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < cart.length; i++) {
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
//without handlebars enable this
    // $('.cart-list').append(cart[i].name + ' - $' + cart[i].price + '<br>');
    cartTotal = cartTotal += cart[i].price;
  }
  $('.total').empty();
  $('.total').append(cartTotal);
}

var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);

}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  var entireCart = cart.length;
  cart.splice(0, entireCart);
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = { name: $(this).closest('.item').data().name, price: $(this).closest('.item').data().price };  
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
