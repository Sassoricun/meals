const openPopup = document.querySelector('.header__cart');
const closePopup = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

openPopup.addEventListener('click', () => {
  popUp.classList.add('popup--active');
});
closePopup.addEventListener('click', () => {
  popUp.classList.remove('popup--active');
});