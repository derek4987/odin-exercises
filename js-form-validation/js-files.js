// js content

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

//email validation
emailInput.addEventListener('input', function(e) {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError()
    }
})

function showError() {
    if(emailInput.validity.valueMissing) {
        emailError.textContent = 'You need to enter a valid e-mail address.';
    }

    emailError.className = 'error active';
}