const inputEl = document.querySelector('#controls input');
const divBoxEl = document.querySelector('#boxes');
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
let amount = 0;

inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
    renderButton.addEventListener('click', onRenderButtonClick);
    amount = event.currentTarget.value;
}

function onRenderButtonClick(event) {
    destroyButton.addEventListener('click', onDestroyButtonClick);
    renderButton.removeEventListener('click', onRenderButtonClick);
    inputEl.removeEventListener('input', onInputChange);

    createBoxes(amount);
    inputEl.value = '';
}

function createBoxes(amount) {
    let size = 30;
    const divElements = [];

    for (let i = 0; i < amount; i += 1){
        const element = document.createElement('div');
        element.style.background = `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        size += 10;
        divElements.push(element);
    }

    divBoxEl.append(...divElements);
}

function onDestroyButtonClick(event) {
    destroyButton.removeEventListener('click', onDestroyButtonClick);
    renderButton.addEventListener('click', onRenderButtonClick);
    inputEl.addEventListener('input', onInputChange);
    destroyBoxes();
    
}

function destroyBoxes() {
    divBoxEl.innerHTML = '';
}