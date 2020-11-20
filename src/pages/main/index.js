/* eslint-disable no-console */
/* eslint-disable no-undef */
// import './pages/index.css';

const body = document.querySelector('body');

const headerButtonAuth = document.querySelector('.header__button-autorisation');
const popupButtonAuth = document.querySelector('.popup__button_registration');
const popupButtonEntry = document.querySelector('.popup__button_entry');
const popupButtonMenuAuth = document.querySelector('.popup__button-autorisation');
const popupReg = document.querySelector('.popup__registration');
const popupEntry = document.querySelector('.popup__entry');
const popupAccess = document.querySelector('.popup__access');
const linkOrRegistration = document.querySelector('.popup__or_registration_link');
const linkOrEntry = document.querySelector('.popup__or_entry_link');
const popupCloseEntry = document.querySelector('.popup__close_entry');
const popupCloseReg = document.querySelector('.popup__close_registration');
const headerSearch = document.querySelector('.header__search');
const buttonSearch = document.querySelector('.header__button-search');
const preloader = document.querySelector('.preloader');
const cards = document.querySelector('.cards');
const notFound = document.querySelector('.not-found');
const cardButton = document.querySelector('.card__button');
const cardAuthTitle = document.querySelector('.card__auth-title');
const cardSave = document.querySelector('.card__save');
const showMore = document.querySelector('.show-more');
const popupAccessLink = document.querySelector('.popup__access-link');
const popupCloseAccess = document.querySelector('.popup__close_access');
const headerListLogout = document.querySelector('.header__list_logout');
const headerListLogin = document.querySelector('.header__list_login');
const headerButtonAuthExit = document.querySelector('.header__button-autorisation_exit');
const headerDropoutMenu = document.querySelector('.header__dropout-menu');
const popupMenu = document.querySelector('.popup__menu');
const popupMenuClose = document.querySelector('.popup__menu-close');
const headerMenu = document.querySelector('.header__menu');
const dropoutButton = document.querySelector('.header__dropout-button');

const popupRegClass = new Popup(popupReg);
const popupEntryClass = new Popup(popupEntry);
const popupAccessClass = new Popup(popupAccess);
const popupMenuClass = new Popup(popupMenu);

headerButtonAuth.addEventListener('click', () => {
  popupEntryClass.open();
});
linkOrRegistration.addEventListener('click', () => {
  popupEntryClass.close();
  popupRegClass.open();
});
linkOrEntry.addEventListener('click', () => {
  popupRegClass.close();
  popupEntryClass.open();
});
popupCloseEntry.addEventListener('click', () => {
  popupEntryClass.close();
  if (innerWidth <= 500) {
    dropoutButton.classList.remove('header__dropout-button_disable')
  }
});
popupCloseReg.addEventListener('click', () => {
  popupRegClass.close();
  if (innerWidth <= 500) {
    dropoutButton.classList.remove('header__dropout-button_disable')
  }
});
popupButtonEntry.addEventListener('click', () => {
  popupAccesEntryClass.open();
  popupEntryClass.close();
});
popupButtonAuth.addEventListener('click', (event) => {
  event.preventDefault();
  popupAccessClass.open();
  popupRegClass.close();
});
buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  console.log(headerSearch);
  if (headerSearch.value === 'Природа') {
    preloader.classList.add('preloader__active');
    setTimeout(() => {
      preloader.classList.remove('preloader__active');
      cards.classList.add('cards__active');
      showMore.classList.add('show-more__active');
    }, 2000);
  } else {
    preloader.classList.add('preloader__active');
    setTimeout(() => {
      preloader.classList.remove('preloader__active');
      notFound.classList.add('not-found__active');
    }, 2000);
  }
});
cardButton.addEventListener('click', (event) => {
  event.preventDefault();
});

cardSave.addEventListener('mouseover', (event) => {
  event.preventDefault();
  cardAuthTitle.classList.add('card__auth-title_active');
});
cardButton.addEventListener('mouseout', (event) => {
  event.preventDefault();
  cardAuthTitle.classList.remove('card__auth-title_active');
});
popupAccessLink.addEventListener('click', () => {
  popupEntryClass.open();
  popupAccessClass.close();
});
popupCloseAccess.addEventListener('click', () => {
  popupAccessClass.close();
});
popupButtonEntry.addEventListener('click', (event) => {
  event.preventDefault();
  headerListLogout.classList.remove('header__list_active');
  headerListLogin.classList.add('header__list_active');
  popupEntryClass.close();
});
headerButtonAuthExit.addEventListener('click', (event) => {
  event.preventDefault();
  headerListLogout.classList.add('header__list_active');
  headerListLogin.classList.remove('header__list_active');
})
body.addEventListener('click', (event) => {
  console.log(event);
});
headerDropoutMenu.addEventListener('click', () => {
  popupMenuClass.open();
})
popupMenuClose.addEventListener('click', () => {
  popupMenuClass.close();
})
popupButtonMenuAuth.addEventListener('click', () => {
  popupEntryClass.open();
  popupMenuClass.close();
  headerMenu.classList.add('header__menu_popup-mobile')
  dropoutButton.classList.add('header__dropout-button_disable')
})



