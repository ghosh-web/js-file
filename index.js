let fname = document.getElementById('fname');
let email = document.getElementById('email');
let password = document.getElementById('pwd');
let cpwd = document.getElementById('cpwd');

let fnameErr = document.querySelector('.fnameErr');
let emailErr = document.querySelector('.emailErr');
let passwordErr = document.querySelector('.pwdErr');
let cpwdErr = document.querySelector('.cpwderr');

fname.addEventListener('input', fnameValidate);
email.addEventListener('input', emailValidate);
password.addEventListener('input', passwordValidate);
cpwd.addEventListener('input', cpwdValidate);

function fnameValidate() {
    let data = fname.value;
    if (data.length < 1) {
        fnameErr.innerHTML = "Required field";
    } else if (data.length < 10) {
        fnameErr.innerHTML = "Minimum 10 characters";
    } else {
        fnameErr.innerHTML = "";
    }
}

function emailValidate() {
    let data = email.value;
    if (data.length < 1) {
        emailErr.innerHTML = "Required field";
    } else if (data.length < 10) {
        emailErr.innerHTML = "Minimum 10 characters";
    } else {
        emailErr.innerHTML = "";
    }
}

function passwordValidate() {
    let data = password.value;
    if (data.length < 1) {
        passwordErr.innerHTML = "Required field";
    } else if (data.length < 10) {
        passwordErr.innerHTML = "Password must be at least 10 characters";
    } else {
        passwordErr.innerHTML = "";
    }
}

function cpwdValidate() {
    let data = cpwd.value;
    if (data.length < 1) {
        cpwdErr.innerHTML = "Required field";
    } else if (data !== password.value) {
        cpwdErr.innerHTML = "Passwords do not match";
    } else {
        cpwdErr.innerHTML = "";
    }
}