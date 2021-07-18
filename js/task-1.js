const categories = document.querySelectorAll('ul#categories>li');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => {
    const titleTextEl = category.querySelector('h2').textContent;
    console.log(`Категория: ${titleTextEl}.`);

    const quantityCategoryEl = category.querySelectorAll('li').length;
    console.log(`Количество элементов: ${quantityCategoryEl}.`);
})