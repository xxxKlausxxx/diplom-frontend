export default class Validation {
    emailValidation(input) {
        const regExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ 

        if (input.value.match(regExp)) {
            return true;
        } else {
            return false;
        }
    }
    otherValidation(input) {
        if (input.length === 0) {
            return false
        } else {
            return true
            
        }
    }

}