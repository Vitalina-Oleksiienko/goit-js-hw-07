const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
    console.log(event);
    event.currentTarget.value.trim() ?
        outputEl.textContent = event.currentTarget.value : outputEl.textContent = 'незнакомец'
}