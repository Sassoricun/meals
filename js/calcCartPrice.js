function calcCartPrice() {
  const popupCart = document.querySelectorAll('.popup__cart');
  const totalPriceEl = document.querySelector('.popup__price-sum');
  let totalPrice = 0;
  popupCart.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.popup__price-item');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  totalPriceEl.innerText = totalPrice;
}