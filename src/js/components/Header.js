export default class Header {
  constructor(options, popup) {
    this.options = options;
    this.popup = popup;

    this.setHandlers()
  }

  render(isLogedIn, userName) {
    const login = this.options.elements.headerLogin;
    const logout = this.options.elements.headerLogout;
    const exitImage = this.options.elements.exitImage;
    const exitButton = this.options.elements.exitButton;
    if(isLogedIn) {
      logout.classList.remove('header__list_active')
      login.classList.add('header__list_active')
      this.options.elements.buttonExit.textContent = userName
      exitButton.appendChild(exitImage)
    }
    else {
      login.classList.remove('header__list_active')
      logout.classList.add('header__list_active')
    }
  }

  renderError() {
    const error = this.options.elements.headerError;
    error.classList.remove('error-massage_hidden');
    error.textContent = 'Нужно ввести ключевое слово';
  }

  setHandlers(){
    const header = this.options
    header.elements.headerBtnAuth.addEventListener('click', () => {
      this.popup.open();
    })
  }

}