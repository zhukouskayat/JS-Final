/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */

import { sortLowtoHight, sortHighttoLow } from "./functionsSort.js"

function up() {
  sortLowtoHight('price');
}

function down() {
  sortHighttoLow('price');
}

export function sort() {
  const priceUp = document.getElementById('priceUp');
  priceUp.addEventListener("click", up);

  const priceDown = document.getElementById('priceDown');
  priceDown.addEventListener("click",down);
};