const popupReg = document.querySelector('.popup__registration');
const POPUP_REG_OPTIONS = {
    container: popupReg,
    elements: {
        closeButton: document.querySelector('.popup__close_registration'),
        popupOr: document.querySelector('.popup__or_entry_link'),
        form: popupReg.querySelector('.popup__form'),
    }
}


export default POPUP_REG_OPTIONS;