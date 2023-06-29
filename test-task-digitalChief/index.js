
const burgerCross = document.getElementsByClassName('burger__cross')[0],
    unvisibleCross = document.getElementsByClassName('burger__cross')[1]
burgerMenu = document.getElementsByClassName('burger__menu')[0];
burgerCross.onclick = ((e) => {
    unvisibleCross.classList.toggle('visible');
    burgerCross.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('noscroll');
});

const inputName = document.getElementsByClassName('input-name')[0],
    inputEmail = document.getElementsByClassName('input-email')[0],
    submitButton = document.getElementsByClassName('submit')[0],
    inputTextarea = document.getElementsByTagName('textarea')[0],
    errorName = document.getElementsByClassName('error')[0],
    errorEmail = document.getElementsByClassName('error')[1],
    formElem = document.getElementsByTagName('form')[0],
    emailRegExp = /^[a-z]{1,10}((_)|(-))?[a-z]{1,10}(\-)?(\d{1,8})?\@[a-z\d]{2,10}((\.)|(\-))?[a-z\d]{1,10}\.((com)|(ru))$/i,
    nameRegExp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/igm

inputEmail.addEventListener('change', emailValidation)
function emailValidation(e) {
    if (!emailRegExp.test(e.target.value)) {
        submitButton.setAttribute('disbled', 'disabled')
        errorEmail.style.visibility = 'visible'
    } else {
        errorEmail.style.visibility = 'hidden'
        submitButton.removeAttribute('disbled', 'disabled')
    }
}

inputName.addEventListener('change', nameValidation)
function nameValidation(e) {
    if (!nameRegExp.test(e.target.value)) {
        submitButton.setAttribute('disbled', 'disabled')
        errorName.style.visibility = 'visible'
    } else {
        errorName.style.visibility = 'hidden'
        submitButton.removeAttribute('disbled', 'disabled')
    }
}

formElem.onsubmit = async (e) => {
    e.preventDefault();
    inputEmail.value = ' '
    inputName.value = ' '
    inputTextarea.value = ' '
    let response = await fetch('http://amchocol.vh116.hosterby.com/store/cart/', {
        method: 'POST',
        body: new FormData(formElem)
    });
    let result = await response.json();

}