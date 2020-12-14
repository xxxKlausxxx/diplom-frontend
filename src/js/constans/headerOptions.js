const header = document.querySelector('.header')
const HEADER_OPTIONS = {
    container: header,
    elements: {
        headerBtnAuth: document.querySelector('.header__button-autorisation'),
        inputSearch: document.querySelector('.header__search'),
        buttonSearch: document.querySelector('.header__button-search'),
        headerError: header.querySelector('.error-massage'),
        headerLogin: document.querySelector('.header__list_login'),
        headerLogout: document.querySelector('.header__list_logout'),
        buttonExit: document.querySelector('.header__button-autorisation_exit'),
        exitImage: document.querySelector('.header__exit-image'),
        exitButton: document.querySelector('.header__button-autorisation_exit')
    },
    options: {
    }
}

export default HEADER_OPTIONS