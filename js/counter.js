// const btnMinus = document.querySelector('#minus');
// const btnPlus = document.querySelector('#plus');
// const counter = document.querySelector('#counter');

// btnMinus.addEventListener('click', function () {
//   if (parseInt(counter.innerText) > 1) {
//     counter.innerText = --counter.innerText;
//   }
// });

// btnPlus.addEventListener('click', function () {
//   counter.innerText = ++counter.innerText;
// });

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
    counter.innerText = --counter.innerText;
  }
});
