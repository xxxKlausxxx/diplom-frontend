export default class FormValidation {
  constructor(validation, form) {
    this.form = form;
    this.validation = validation;
    this.setEventListeners();
  }

  setEventListeners() {
    const inputEmail = this.form.querySelector('.popup__input_email');
    const inputName = this.form.querySelector('.popup__input_name');
    const inputPassword = this.form.querySelector('.popup__input_password');
    let isValidForm = false;

    if(this.form.classList.contains('popup__form_registration')) {
      inputEmail.addEventListener('input', () => {
        this.emailValidity(inputEmail);
      });
      inputName.addEventListener('input', () => {
        this.nameValidity(inputName);
      });
      inputPassword.addEventListener('input', () => {
        this.passwordValidity(inputPassword);
      });
      this.form.addEventListener('input', () => {
        if(this.nameValidity(inputName) === true &&
          this.passwordValidity(inputPassword) === true &&
          this.emailValidity(inputEmail) === true) {    
            isValidForm = true;
            this.setSubmitButtonState(isValidForm);
        }
        else {
            isValidForm = false;
            this.setSubmitButtonState(isValidForm)
          }
      })
    }
    if(this.form.classList.contains('popup__form_entry')) {
      inputEmail.addEventListener('input', () => {
        this.emailValidity(inputEmail);
      });
      inputPassword.addEventListener('input', () => {
        this.passwordValidity(inputPassword);
      });
      this.form.addEventListener('input', () => {
        if(this.passwordValidity(inputPassword) === true &&
           this.emailValidity(inputEmail) === true) {    
            isValidForm = true;
            this.setSubmitButtonState(isValidForm)
        }
        else {
            isValidForm = false;
            this.setSubmitButtonState(isValidForm)
          }
      })
    }
  }

  nameValidity(elem) {
    const error = elem.nextElementSibling;
    if(!this.validation.otherValidation(elem.value)) {
      this.activateError(elem);
      error.textContent = 'Это поле обязательно для заполнения';
      return false;
    }
    this.resetError(elem)
    return true;
  }

  passwordValidity(elem) {
    const error = elem.nextElementSibling;
    const errorMesseges = {
      valueMissing: 'Это поле обязательно для заполнения',
      tooShort: 'Минимум 8 символов'
    }
    if(!this.validation.otherValidation(elem.value)) {
      this.activateError(elem);
      error.textContent = errorMesseges.valueMissing;
      return false;
    }
    if(!this.validation.passwordValidation(elem.value)) {
      this.activateError(elem);
      error.textContent = errorMesseges.tooShort;
      return false;
    }
    this.resetError(elem)
    return true;
  }

  emailValidity(elem) {
    const error = elem.nextElementSibling;
    const errorMesseges = {
      valueMissing: 'Это поле обязательно для заполнения',
      validateError: 'Некорректный Email'
    }

    if(!this.validation.otherValidation(elem)) {
      this.activateError(elem.value);
      error.textContent = errorMesseges.valueMissing;
      return false;
    }
    if(!this.validation.emailValidation(elem)) {
      this.activateError(elem);
      error.textContent = errorMesseges.validateError;
      return false;
    }
    else {
      this.resetError(elem)
      return true;
    }
  }

  activateError(elem) {
    elem.nextElementSibling.classList.remove('error-massage_hidden');
    elem.setAttribute("style", "margin-bottom:0;");
  }

  resetError(elem) {
    elem.removeAttribute("style");
    elem.nextElementSibling.textContent = "";
    elem.nextElementSibling.classList.add("error-massage_hidden");
  }

  setSubmitButtonState(isValidForm) {
    const button = this.form.querySelector(".popup__button");
    if (isValidForm) {
      button.classList.add('popup__button_active');
    } else {
      button.classList.remove('popup__button_active');
    }
  }
}