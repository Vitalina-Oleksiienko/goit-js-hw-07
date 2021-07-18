const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onFocusCheck);
inputEl.addEventListener('blur', onInputValidCheck);

function onInputValidCheck(event) {
    event.currentTarget.value.length == inputEl.dataset.length ?
        event.currentTarget.classList.add('valid') :
        event.currentTarget.classList.add('invalid');
}

function onFocusCheck(event) {
    event.currentTarget.classList.remove('valid', 'invalid');
};