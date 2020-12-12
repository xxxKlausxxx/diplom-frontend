export default class Validation {
    emailValidation(input) {
        const regExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ 

        if (input.value.match(regExp)) {
            return true;
        } else {
            return false;
        }
    }
    passwordValidation(input) {
        if (input.length < 8) {
            return false;
        } else {
            return true;
        }
    }
    otherValidation(input) {
        if (input.value === 0) {
            return false;
        } else {
            return true;       
        }
    }

}