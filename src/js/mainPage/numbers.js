/* eslint-disable operator-assignment */
/* eslint-disable import/prefer-default-export */

export function outNum() {
  const num = 2510;
  const time = 5000;
  const step = 10;
  const l = document.querySelector('#numbers');
  const t = Math.round(time / (num / step));
  let n = 0;
  const interval = setInterval(() => {
  n = n + step;
    if (n === num) {
      clearInterval(interval);
    } else {
      l.innerHTML = n;
    }
  }, t)
}

outNum();