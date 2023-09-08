const cartWrapper = document.querySelector('.popup__carts')

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.main__card')
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.main__img').getAttribute('src'),
      title: card.querySelector('.main__title').innerText,
      subtitle: card.querySelector('.main__subtitle').innerText,
      price: card.querySelector('.main__price').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    }
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = `<div class="popup__cart" data-id="${productInfo.id}">
                              <div class="popup__img-item">
                                <img class="popup__img" src="${productInfo.imgSrc}" alt="">
                              </div>
                              <div class="popup__info">
                                <p class="popup__text">${productInfo.title}</p>
                                <p class="popup__subtitle">${productInfo.subtitle}</p>
                                <div class="popup__price-box">
                                  <p class="popup__price-item">${productInfo.price}</p>
                                  <div class="popup__counter counter-wrapper">
                                    <div class="popup__counter-control" data-action="minus">-</div>
                                    <div class="popup__counter-current" data-counter>${productInfo.counter}</div>
                                    <div class="popup__counter-control" data-action="plus">+</div>
                                  </div>
                                </div>
                              </div>
                            </div>`;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }
    card.querySelector('[data-counter]').innerText = '1';
    calcCartPrice();
  }
});