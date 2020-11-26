// Импорт модулей

import './index.css';
import Popup from '../../js/components/Popup';
import POPUP_ENTRY_OPTIONS from '../../js/constans/popupEntryOptions';
import Header from '../../js/components/Header';
import HEADER_OPTIONS from '../../js/constans/headerOptions';
import POPUP_REG_OPTIONS from '../../js/constans/popupRegOptions';
import PopupEntry from '../../js/components/PopupEntry';

// Подключение классов

const popupEntry = new Popup(POPUP_ENTRY_OPTIONS);
const popupReg = new Popup(POPUP_REG_OPTIONS);
const header = new Header(HEADER_OPTIONS, popupEntry);
const popupRegOpen = new PopupEntry(POPUP_ENTRY_OPTIONS, popupReg);

// Вызов классов


const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})