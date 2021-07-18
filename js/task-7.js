const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}