document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('inputPassword4');
    const confirmPassword = document.getElementById('confirmPassword');
    const termsCheck = document.getElementById('termsCheck');
    const signupButton = document.getElementById('signupButton');
    const fullname = document.getElementById('fullname');
    
    const emailError = document.getElementById('email_error');
    const phoneError = document.getElementById('phone_error');
    const passwordError = document.getElementById('password_error');
    const confirmPasswordError = document.getElementById('confirm_password_error');

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordPattern.test(password);
    };

    const validateForm = () => {
        let valid = true;

        if (validateEmail(email.value)) {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            emailError.textContent = '';
        } else {
            email.classList.remove('is-valid');
            email.classList.add('is-invalid');
            emailError.textContent = 'Invalid email format';
            valid = false;
        }

        if (validatePhone(phone.value)) {
            phone.classList.remove('is-invalid');
            phone.classList.add('is-valid');
            phoneError.textContent = '';
        } else {
            phone.classList.remove('is-valid');
            phone.classList.add('is-invalid');
            phoneError.textContent = 'Phone number must be 10 digits';
            valid = false;
        }

        if (validatePassword(password.value)) {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            passwordError.textContent = '';
        } else {
            password.classList.remove('is-valid');
            password.classList.add('is-invalid');
            passwordError.textContent = 'Password must be at least 6 characters, and include an uppercase letter, a number, and a special character';
            valid = false;
        }

        if (password.value === confirmPassword.value) {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
            confirmPasswordError.textContent = '';
        } else {
            confirmPassword.classList.remove('is-valid');
            confirmPassword.classList.add('is-invalid');
            confirmPasswordError.textContent = 'Passwords do not match';
            valid = false;
        }

        if (!termsCheck.checked) {
            valid = false;
        }

        if (fullname.value.trim() === '') {
            fullname.classList.add('is-invalid');
            valid = false;
        } else {
            fullname.classList.remove('is-invalid');
        }

        signupButton.disabled = !valid;
    };

    email.addEventListener('input', validateForm);
    phone.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    confirmPassword.addEventListener('input', validateForm);
    termsCheck.addEventListener('change', validateForm);
    fullname.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const userData = {
            id: new Date().getTime(),
            fullname: fullname.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
        };
        localStorage.setItem(userData.email, JSON.stringify(userData));
        alert('Account created successfully!');
        window.location.href = 'login.html';
    });
});
