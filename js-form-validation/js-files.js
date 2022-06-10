// js content

const form = document.querySelector('#form');

const emailInput = document.querySelector('#email');
const emailError = emailInput.nextElementSibling.nextElementSibling;
const countryInput = document.querySelector('#country');
const countryError = countryInput.nextElementSibling.nextElementSibling;
const zipCodeInput = document.querySelector('#zipCode');
const zipCodeError = zipCodeInput.nextElementSibling.nextElementSibling;
const passwordInput = document.querySelector('#password');
const passwordError = passwordInput.nextElementSibling.nextElementSibling;
const confirmPasswordInput = document.querySelector('#confirmPassword');
const confirmPasswordError = confirmPasswordInput.nextElementSibling.nextElementSibling;

// validate whether form is valid (filled out properly and completely)
form.addEventListener('submit', function(e) {
    // prevent form from submitting
    e.preventDefault();

    // validate form
    let isEmailValid = checkEmail(),
        isCountryValid = checkCountry(),
        isZipCodeValid = checkZipCode(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isEmailValid &&
        isCountryValid &&
        isZipCodeValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
        alert('All fields are valid');
    }
});

// instant feedback validation
form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'country':
            checkCountry();
            break;
        case 'zipcode':
            checkZipCode();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});

// utility functions (rules) for inputs
// is input empty
const isRequired = value => value === '' ? false : true;

// min max character length
const isbetween = (length, min, max) => length < min || length > max ? false : true;

// check if email is valid
const isEmailValid = (email) => {
    // regular expression
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// check if password is strong
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

// check that value has only letters
const isOnlyLetters = (value) => {
    const re = /^[A-Za-z]+$/;
    return re.test(value);
}

// check that value is only numbers
const isAlphanumeric = (value) => {
    const re = /^[a-zA-Z0-9]+$/;
    return re.test(value);
}


const showError = (input, message) => {
    // get form-field element
    const formField = input.parentElement;
    // add error class
    formField.classList.remove('success');
    formField.classList.add('error');
    input.style.borderColor = '#900';
    
    // show error message
    const error = formField.querySelector('span');
    error.textContent = message;
}

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    input.style.borderColor = 'rgb(211,202,202)';

    // hide the error message
    const error = formField.querySelector('span');
    error.textContent = '';
}

const checkEmail = () => {
    let valid = false;
    const email = emailInput.value.trim();
    if (!isRequired(email)) {
        showError(emailInput, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailInput, 'Email is not valid.');
    } else {
        showSuccess(emailInput);
        valid = true;
    }

    return valid;
}

const checkCountry = () => {
    let valid = false;
    const country = countryInput.value.trim();
    if (!isRequired(country)) {
        showError(countryInput, 'Country cannot be blank.');
    } else if (!isOnlyLetters(country)) {
        showError(countryInput, 'Country must only contain letters.')
    } else {
        showSuccess(countryInput);
        valid = true;
    }

    return valid;
}

const checkZipCode = () => {
    let valid = false;
    const zipCode = zipCodeInput.value.trim();
    if (!isRequired(zipCode)) {
        showError(zipCodeInput, 'Zip code cannot be blank.');
    } else if (!isAlphanumeric(zipCode) || !isbetween(zipCode.length,3,7)) {
        showError(zipCodeInput, 'Please enter zip code with only letters and numbers with a max of 7 characters. Do not include any hyphens or special characters.')
    } else {
        showSuccess(zipCodeInput);
        valid = true;
    }

    return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passwordInput.value.trim();

    if (!isRequired(password)) {
        showError(passwordInput, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordInput);
        valid = true;
    }

    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordInput, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordInput);
        valid = true;
    }

    return valid;
}