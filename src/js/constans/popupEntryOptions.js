const popupEntry = document.querySelector('.popup__entry');
const POPUP_ENTRY_OPTIONS = {
    container: popupEntry,
    elements: {
        closeButton: document.querySelector('.popup__close_entry'),
        popupOr: document.querySelector('.popup__or_registration_link'),
        form: popupEntry.querySelector('.popup__form'),
    }
}

export default POPUP_ENTRY_OPTIONS;