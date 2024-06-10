document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('inputPassword4');
    const confirmPassword = document.getElementById('confirmPassword');
    const termsCheck = document.getElementById('termsCheck');
    const signupButton = document.getElementById('signupButton');
    const fullname = document.getElementById('fullname');

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordPattern.test(password);
    };

    const validateForm = () => {
        if (
            validateEmail(email.value) &&
            phone.value.length === 10 &&
            validatePassword(password.value) &&
            password.value === confirmPassword.value &&
            termsCheck.checked &&
            fullname.value.trim() !== ''
        ) {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
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
