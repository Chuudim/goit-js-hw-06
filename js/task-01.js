

const categoriesList = document.querySelector('#categories');
const itemsList = categoriesList.querySelectorAll('.item');

// Отримання загальної кількості категорій
console.log(`Number of categories: ${itemsList.length}`);

// Перебір кожної категорії та виведення її заголовку та кількості елементів
itemsList.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle} (Elements: ${categoryItems})`);
});
