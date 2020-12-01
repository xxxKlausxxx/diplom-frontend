export default class FormRegistration {
  constructor(form, validation) {
    this.form = form;
    this.validation = validation;
    this.setEventListeners();
  }

  setEventListeners() {
    const inputEmail = this.form.querySelector('.popup__input_email');
    const inputName = this.form.querySelector('.popup__input_name');
    const inputPassword = this.form.querySelector('.popup__input_password');
    let isValidForm = true;

    inputEmail.addEventListener('input', () => {
      this.emailValidity(inputEmail);
    });
    inputName.addEventListener('input', () => {
      this.nameValidity(inputName);
    });
    inputPassword.addEventListener('input', () => {
      this.passwordValidity(inputPassword);
    });
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
    if(!this.validation.otherValidation(elem.value)) {
      this.activateError(elem);
      error.textContent = 'Это поле обязательно для заполнения';
      return false;
    }
    this.resetError(elem)
    return true
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
      return true
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
    console.log('Working');
  }

  setSubmitButtonState(isValidForm) {
    const button = this.form.querySelector("button");
    if (isValidForm) {
      button.classList.add('popup__button_active');
    } else {
      button.classList.remove('popup__button_active');
    }
  }
}