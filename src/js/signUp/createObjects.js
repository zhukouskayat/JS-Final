/* eslint-disable import/prefer-default-export */

export function createObject() {
  const obj = {};

  document
    .querySelectorAll("input")
    .forEach((form) => {
      (obj[form.name] = form.value)
    });

  return obj;
};