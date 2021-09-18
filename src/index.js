import productCardsTmp from './templates/product-cards.hbs';
import products from './menu.json';


const productsMenu = document.querySelector('.menu');
const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
const body= document.querySelector('body');



productsMenu.insertAdjacentHTML('beforeend',productCardsTmp(products));

themeSwitchToggle.addEventListener('change', toggleTheme);

function toggleTheme(evt)  {

    if (evt.target.checked) {
        
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark-theme');
        
    } else {
        
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light-theme');
    };   
};


if (localStorage.getItem('theme') === 'dark-theme' ){

   body.classList.add("dark-theme");
   body.classList.remove('light-theme')
   themeSwitchToggle.setAttribute('checked', true);

} else {

    body.classList.add('light-theme');

};