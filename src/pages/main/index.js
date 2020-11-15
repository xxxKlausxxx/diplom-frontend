//import './pages/index.css';

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
const popupCloseReg = document.querySelector('.popup__close_registration')

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
popupClose.addEventListener('click', (event) => {
    console.log(event.parentElement)
      //popupEntryClass.close()
      popupRegClass.close();
      //popupAccesClass.close();
});
popupButtonEntry.addEventListener('click', () => {
    popupAccesEntryClass.open();
    popupEntryClass.close();
});
popupButtonAuth.addEventListener('click', () => {
    popupRegAccessClass.open();
    popupRegClass.close()
})