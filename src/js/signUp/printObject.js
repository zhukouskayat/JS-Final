/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { createObject } from "./createObjects.js"

function printObject() {
  console.log(createObject());
  return printObject;
};

export function sub(doc) {
  const submit = doc.getElementById("button");
  submit.addEventListener("click", printObject);
  return sub;
};