export default class FormRegistration {
    constructor(form, popupReg, mainApi, popupAccess) {
        this.form = form;
        this.mainApi = mainApi;
        this.popupReg = popupReg;
        this.popupAccess = popupAccess;
        this._signup = this._signup.bind(this);

        this.setEventListeners()
    }

    _signup(email, password, name) {
        if(this.form.querySelector('.popup__button').classList.contains('popup__button_active')){
        email = this.form.querySelector('.popup__input_email').value;
        name = this.form.querySelector('.popup__input_name').value;
        password = this.form.querySelector('.popup__input_password').value;
        this.mainApi.signup(email, password, name)
        .then(res => {
            console.log(res)
                this.popupReg.close();
                this.popupAccess.open();     
        })
        .catch(err => {
            this._setServerError(err)
        })
        }
    }

    _setServerError(err) {
        const error = this.form.querySelector('.popup__server-error');
        error.classList.remove('popup__server-error_hidden');     
        error.textContent = `${err}`;
    }

    setEventListeners() {
        this.form.querySelector('.popup__button').addEventListener("click", this._signup)
    }
}