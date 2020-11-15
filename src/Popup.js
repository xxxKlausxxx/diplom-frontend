class Popup {

    constructor(popup){
        this.popup = popup;
    }

    //Открытие попапа

    open() {
        this.popup.classList.add('popup_is-opened');
    }

    //Закрытие попапа

    close() {
        this.popup.classList.remove('popup_is-opened');
    }
}