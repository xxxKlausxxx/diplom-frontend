// Импорт модулей

import './index.css';
import Popup from '../../js/components/Popup';
import POPUP_ENTRY_OPTIONS from '../../js/constans/popupEntryOptions';
import Header from '../../js/components/Header';
import HEADER_OPTIONS from '../../js/constans/headerOptions';
import POPUP_REG_OPTIONS from '../../js/constans/popupRegOptions';
import PopupEntry from '../../js/components/PopupEntry';
import PopupReg from '../../js/components/PopupReg';
import Validation from '../../js/utils/Validation';
import FormRegistration from '../../js/components/FormRegistration';

// Подключение классов

const popupEntry = new Popup(POPUP_ENTRY_OPTIONS);
const popupReg = new Popup(POPUP_REG_OPTIONS);
const header = new Header(HEADER_OPTIONS, popupEntry);
const popupRegOpen = new PopupEntry(POPUP_ENTRY_OPTIONS, popupReg);
const popupEntryOpen = new PopupReg(POPUP_REG_OPTIONS, popupEntry);
const formReg = new FormRegistration(POPUP_REG_OPTIONS.elements.form, new Validation)

// Вызов классов


const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})