import Popup from './Popup';

export default class PopupEntry extends Popup {
    constructor(options, popupReg) {
        super(options);
        this.popupReg = popupReg;
    }


    setHandlers() {
        this.options.elements.popupOr.addEventListener('click', () => {
            super.close();
            super.clearContent()
            this.popupReg.open();
        })
    }
    
}