export default class Popup {
  constructor(options) {
    this.options = options;

    this.setHandlers();
  }

  setContent(message) {

  }

  clearContent() {
    const inputsArr = Array.from(this.options.container.querySelectorAll('.popup__input'));
    const spansArr = Array.from(this.options.container.querySelectorAll('.error-massage'));
    const buttonsArr = Array.from(this.options.container.querySelectorAll('.popup__button')); 

    this.options.elements.form.reset();
    spansArr.forEach(elem => {
      elem.classList.add("error-massage_hidden");
    });
  inputsArr.forEach(elem => {
      elem.removeAttribute("style");
    });
  buttonsArr.forEach(elem => {
      elem.classList.remove('popup__button_active');
    });
  }

  open() {
    this.options.container.classList.add('popup_is-opened');
  }

  close() {
    this.options.container.classList.remove('popup_is-opened');
    this.clearContent()
  }

  setHandlers() { 
    this.options.elements.closeButton.addEventListener('click', () => {
      this.close()
      this.clearContent()
    });
    this.options.container.addEventListener('click', (event) =>{
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }
}
