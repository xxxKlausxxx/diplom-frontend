//import './pages/index.css';

const body = document.querySelector('body')

const headerButtonAuth = document.querySelector('.header__button-autorisation');
const popupButtonAuth = document.querySelector('.popup__button_registration');
const popupButtonEntry = document.querySelector('.popup__button_entry');
const popupReg = document.querySelector('.popup__registration');
const popupEntry = document.querySelector('.popup__entry');
const popupEntryAccess = document.querySelector('.popup__entry-access');
const popupRegAccess = document.querySelector('.popup__registration-acces')
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
const showMore = document.querySelector('.show-more')

const popupRegClass = new Popup(popupReg);
const popupEntryClass = new Popup(popupEntry);
const popupAccesEntryClass = new Popup(popupEntryAccess);
const popupRegAccessClass = new Popup(popupRegAccess)

headerButtonAuth.addEventListener('click', () => {
    popupEntryClass.open()
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
});
popupCloseReg.addEventListener('click', () => {
    popupRegClass.close()
})
popupButtonEntry.addEventListener('click', () => {
    popupAccesEntryClass.open();
    popupEntryClass.close();
});
popupButtonAuth.addEventListener('click', () => {
    popupRegAccessClass.open();
    popupRegClass.close()
})
buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
    console.log(headerSearch)
    if(headerSearch.value === 'Природа') {
        preloader.classList.add('preloader__active');
        setTimeout(function() {
          preloader.classList.remove("preloader__active");
          cards.classList.add("cards__active");
          showMore.classList.add("show-more__active");
        }, 2000);
    } else {
        preloader.classList.add('preloader__active');
        setTimeout(function() {
          preloader.classList.remove("preloader__active");
          notFound.classList.add("not-found__active")
        }, 2000);

    }
});
cardButton.addEventListener('click', (event) => {
    event.preventDefault()
});

cardSave.addEventListener('mouseover', (event) => {
    event.preventDefault()
    cardAuthTitle.classList.add('card__auth-title_active')
});
cardButton.addEventListener('mouseout', (event) => {
    event.preventDefault()
    cardAuthTitle.classList.remove('card__auth-title_active')
});
body.addEventListener('click', (event) => {
    console.log(event)
})