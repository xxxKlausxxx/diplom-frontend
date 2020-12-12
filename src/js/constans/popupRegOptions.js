const popupReg = document.querySelector('.popup__registration');
const POPUP_REG_OPTIONS = {
    container: popupReg,
    elements: {
        closeButton: document.querySelector('.popup__close_registration'),
        popupOr: document.querySelector('.popup__or_entry_link'),
        form: popupReg.querySelector('.popup__form'),
        button: document.querySelector('.popup__button_registration'),
        serverError: popupReg.querySelector('.popup__server-error'),
    }
}


export default POPUP_REG_OPTIONS;