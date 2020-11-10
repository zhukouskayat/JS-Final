/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */

export function menu (doc) {
  doc.querySelector('.menu-icon').onclick = function(){
    const menuElem = document.getElementById('menu-items');
    menuElem.classList.toggle('active');
  }
}