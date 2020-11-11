/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable prefer-template */

export function search() {
    document.querySelector('#search').oninput = function(){
        const value = this.value.trim();
        const items = document.querySelectorAll('p');
        if(value !== '') {
            items.forEach(function(elem){
                if(elem.innerText.search(value) === -1) {
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                    const str = elem.innerText;
                    elem.innerHTML = insertMark(str, elem.innerText.search(value), value.length);
                }
            })
        }
        else {
            items.forEach(function (elem) {
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            });
        }
    }
}

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}