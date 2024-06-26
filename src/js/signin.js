const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'username is required');
    } else {
        setSuccess(username);

    }

    if (emailValue === '') {
        setError(email, 'email is require');
    } else if (!isValidateEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    }else{
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'password is required');
    }else if (passwordValue.length < 10) {
        setError(password, 'password must be atlist 8 characters.')
    } else {
        setSuccess(password);
    }

    if (passwordValue === '') {
        setError(password2, 'please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "pikachu says the passwords dont match")
    } else {
        setSuccess(password2);
    }
}