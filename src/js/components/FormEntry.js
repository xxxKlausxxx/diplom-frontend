export default class FormEntry {
    constructor(form, mainApi, popupEntry, header, newsCard) {
        this.form = form;
        this.mainApi = mainApi;
        this.popupEntry = popupEntry;
        this.header = header;
        this.newsCard = newsCard
        this._signin = this._signin.bind(this);

        this.setEventListeners()
    }

    _signin(email, password) {
        if(this.form.querySelector('.popup__button').classList.contains('popup__button_active')){
            email = this.form.querySelector('.popup__input_email').value;
            password = this.form.querySelector('.popup__input_password').value;
            this.mainApi.signin(email, password)
            .then(res => {
                this.popupEntry.close()
                this.login(res) 
            })
            .catch(err => {
                this._setServerError(err)
    })
        }}

    login(token) {
        localStorage.setItem('token', token);
        return this.mainApi.getUserData(token)
        .then(res => {
           const login = true
            localStorage.setItem('name', res.name);
            this.header.render(login, res.name);
            this.mainApi.getArticles()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    _setServerError(err) {
        const error = this.form.querySelector('.popup__server-error');
        error.classList.remove('popup__server-error_hidden');     
        error.textContent = `${err}`;
    }

    setEventListeners() {
        this.form.querySelector('.popup__button').addEventListener("click", this._signin)
    }
}