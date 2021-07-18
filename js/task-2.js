const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredientListEl = (ingredients) => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    return liEl;
  })
}

const elements = makeIngredientListEl(ingredients);
const liElement = document.querySelector('ul#ingredients');
liElement.append(...elements);