/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */

export function popup() {
  const popupLink = document.querySelector('.popup-link');
  popupLink.addEventListener('click', function (e) {
    e.preventDefault();
    const pop = document.querySelector('.popup');
    pop.classList.add('open');
  })
  const popupClose = document.querySelector('.close-popup')
  popupClose.addEventListener('click', function (e) {
    e.preventDefault();
    const pop = document.querySelector('.popup.open');
    pop.classList.remove('open');
  })
}