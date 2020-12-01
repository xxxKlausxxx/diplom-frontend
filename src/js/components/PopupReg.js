import Popup from './Popup';

export default class PopupReg extends Popup {
    constructor(options, popupEntry) {
        super(options);
        this.popupEntry = popupEntry;
    }


    setHandlers() {
        this.options.elements.popupOr.addEventListener('click', (event) => {
            super.close();
            this.popupEntry.open();
        })
    }
    
}