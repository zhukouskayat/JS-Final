/* eslint-disable func-names */

document.querySelector('.menu-icon').onclick = function(){
  const menuElem = document.getElementById('menu-items');
  this.classList.toggle('open');
  menuElem.classList.toggle('active');
}
