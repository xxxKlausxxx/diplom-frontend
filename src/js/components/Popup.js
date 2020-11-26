import BaseComponent from './BaseComponent'

export default class Popup extends BaseComponent{
  constructor(options) {
    this.options = options;
  }

  setContent(message) {

  }

  clearContent() {

  }

  open() {
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }
}