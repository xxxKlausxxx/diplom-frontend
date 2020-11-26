export default class Header {
  constructor(options, popup) {
    this.options = options;
    this.popup = popup;
    this.setHandlers()
  }

  render(isLogedIn, userName) {

  }

  setHandlers(){
    const header = this.options
    header.elements.headerBtnAuth.addEventListener('click', () => {
      this.popup.open();
    })
  }

}