// Select elements
const productsEl = document.querySelector('.main__cards');
const cartItemsEl = document.querySelector('.popup__carts');
const subtotalEl = document.querySelector('.popup__price-sum');
const totalItemsInCartEl = document.querySelector('.header__cart-num');
// Render products
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
                                <div class="main__card">
                                  <div class="main__img-item">
                                    <img class="main__img" src="${product.imgSrc}" alt="${product.name}">
                                  </div>
                                  <h4 class="main__title">${product.name}</h4>
                                  <p class="main__subtitle">${product.description}</p>
                                  <div class="main__wrapper">
                                    <p class="main__price">${product.price} $</p>
                                  </div>
                                  <button class="main__btn" type="submit" onclick="addToCart(${product.id})">+ Add</button>
                                </div>
                             `
  });
};
renderProducts();
// Cart array
let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();
// Add to cart
function addToCart(id) {
  // Check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits('plus', id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
};
// Update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  // Save cart to local storage
  localStorage.setItem('CART', JSON.stringify(cart));
};
// Calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subtotalEl.innerHTML = totalPrice;
  totalItemsInCartEl.innerHTML = totalItems;
};
// Render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ''; // Clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
                          <div class="popup__cart">
                            <div class="popup__img-item" onclick="removeItemFromCart(${item.id})">
                              <img class="popup__img" src="${item.imgSrc}" alt="${item.name}">
                            </div>
                            <div class="popup__info">
                              <p class="popup__text">${item.name}</p>
                              <p class="popup__subtitle">${item.description}</p>
                              <div class="popup__price-box">
                                <p class="popup__price-item">${item.price} $</p>
                                <div class="popup__counter counter-wrapper">
                                  <div class="popup__counter-control" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                                  <div class="popup__counter-current">${item.numberOfUnits}</div>
                                  <div class="popup__counter-control" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                                </div>
                              </div>
                            </div>
                          </div>
                         `
  });
};
// Remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
};
// Change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === 'minus' && numberOfUnits > 1) {
        numberOfUnits--
      } else if (action === 'plus') {
        numberOfUnits++;
      }
    };
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
};