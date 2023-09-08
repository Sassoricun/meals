window.addEventListener('click', function (event) {
  let counter;
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  };
  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.popup__carts') && parseInt(counter.innerText) === 1) {
      event.target.closest('.popup__cart').remove();
      calcCartPrice();
    }
  }
  if (event.target.hasAttribute('data-action') && event.target.closest('.popup__cart')) {
    calcCartPrice();
  };
});