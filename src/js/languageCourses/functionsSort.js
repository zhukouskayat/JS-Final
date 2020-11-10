/* eslint-disable no-use-before-define */

export function sortLowtoHight(sortType) {
  const items = document.querySelector('.items');
  for (let i = 0; i < items.children.length - 1; i += 1) {
    for (let j = i; j < items.children.length; j += 1) {
      if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
        const replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

export function sortHighttoLow(sortType) {
  const items = document.querySelector('.items');
  for (let i = 0; i < items.children.length - 1; i += 1) {
    for (let j = i; j < items.children.length; j += 1) {
      if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
        const replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function insertAfter(element, refElem) {
  return refElem.parentNode.insertBefore(element, refElem.nextSibling);
}