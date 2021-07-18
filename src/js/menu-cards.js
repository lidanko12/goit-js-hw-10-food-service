import menu from './menu.json';
import cardsTemplates from './templates/cards.hbs';

const menuRef = document.querySelector('.js-menu');


const markup = cardsTemplates(menu);
menuRef.insertAdjacentHTML('beforeend', markup);