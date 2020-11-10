/* eslint-disable no-shadow */
/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('button');

export function button() {
  form.addEventListener("click", check);
  btn.className = 'btn';
};

function check(e) {
  e.preventDefault();
  checkInputs();
}

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  if (usernameValue === '') {
    setErrorFor(username, 'Username can not be blank')
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email can not be blank')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password can not be blank')
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password can not be blank')
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match')
  } else {
    setSuccessFor(password2);
  }

  const us =usernameValue !== '';
  const em = emailValue !== '';
  const em2 = emailValue !== !isEmail(emailValue);
  const pas = passwordValue !== '';
  const pas2 = password2Value !== '';
  const pasPas = passwordValue === password2Value;

  if(us && em && em2 && pas && pas2 && pasPas) {
    window.location = '../../public/index.html';
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function isEmail(email) {
  const e = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return e.test(email);
}