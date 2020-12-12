import Popup from './Popup'

export default class PopupAccess extends Popup {
    constructor(options, popupEntry) {
        super(options)
        this.popupEntry = popupEntry;
    }

    setHandlers() {
        this.options.elements.entryButton.addEventListener('click', (event) => {
            super.close();
            this.popupEntry.open();
        })
    }
}