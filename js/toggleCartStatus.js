const openPopup = document.querySelector('.header__cart');
const closePopup = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

openPopup.addEventListener('click', () => {
  popUp.classList.add('popup--active');
});
closePopup.addEventListener('click', () => {
  popUp.classList.remove('popup--active');
});

const addCart = document.querySelectorAll('.main__btn');
const cartShow = document.querySelector('.header__cart-num');
for (i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener('click', () => {
    cartCount();
  })
}
function cartCount() {
  let prdCount = localStorage.getItem('cartsCount');
  prdCount = parseInt(prdCount);
  if (prdCount) {
    localStorage.setItem('cartsCount', prdCount + 1);
    cartShow.textContent = prdCount + 1;
  } else {
    localStorage.setItem('cartsCount', 1);
    cartShow.textContent = 1;
  }
}
function displayCart() {
  let prdCount = localStorage.getItem('cartsCount');
  if (prdCount) {
    cartShow.textContent = localStorage.clear();
  }
};
displayCart();