export default class Header {
  constructor(options, popup) {
    this.options = options;
    this.popup = popup;
    this.render = this.render.bind(this)

    this.setEventListeners()
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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    window.location.href = "./index.html";
  }

  checkToken() {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('name');
    let isLogedIn = false;
    if(token) {
      isLogedIn = true;
      this.render(isLogedIn, userName)
    }
    if (token === 0) {
      this.render(isLogedIn)
    }
  }

  setEventListeners(){
    const header = this.options;
    const exitButton = this.options.elements.exitButton;
    header.elements.headerBtnAuth.addEventListener('click', () => {
      this.popup.open();
    })
    exitButton.addEventListener('click', () => {this.logout()})
  }

}