/* eslint-disable no-undef */
import './index.css';
import Popup from './Popup';

const cardDelete = document.querySelector('.card__delete');
const cardAuthTitleDelete = document.querySelector('.card__auth-title_delete');
const popupMenu = document.querySelector('.popup__menu');
const headerDropoutMenu = document.querySelector('.header__dropout-menu');
const popupMenuClose = document.querySelector('.popup__menu-close');

const popupMenuClass = new Popup(popupMenu);

cardDelete.addEventListener('mouseover', () => {
  cardAuthTitleDelete.classList.add('card__auth-title_active');
});
cardDelete.addEventListener('mouseout', () => {
  cardAuthTitleDelete.classList.remove('card__auth-title_active');
});
headerDropoutMenu.addEventListener('click', () => {
  popupMenuClass.open();
});
popupMenuClose.addEventListener('click', () => {
  popupMenuClass.close();
});
