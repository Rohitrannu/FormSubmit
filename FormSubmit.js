let nameError = document.getElementById("name-error");
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
let popup = document.getElementById('popup');


function checkName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full Name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function checkPhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Enter Phone Number";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = ' Only Digts Please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}
function checkEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Enter email Your';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function checkMessage() {
    var messageBox = document.getElementById('contact-message').value;
    var chr = 30;
    var left = chr - messageBox.length;


    if (left > 0) {
        messageError.innerHTML = left + 'Enter characterrs required'
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// function checkSubmit() {
//     if (!checkName() || !checkPhone() || !checkEmail() || !checkMessage()) {
//         submitError.style.display = 'block'
//         submitError.innerHTML = 'Please Fix error to submit';
//         setTimeout(function () {
//             submitError.style.display = 'none';
//         }, 3000);
//         return false
//     }
// }



function openPop() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}