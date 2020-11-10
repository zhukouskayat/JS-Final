/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable dot-notation */

export function filter () {
    const fil = document.querySelectorAll('.item');

    document.querySelector('#filter').addEventListener('click', (event) => {
        const filterClass = event.target.dataset['lang'];
        console.log(filterClass);
    
        fil.forEach(elem => {
            elem.removeAttribute('id');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.id = 'hide';
            }
        });
    
    });
}