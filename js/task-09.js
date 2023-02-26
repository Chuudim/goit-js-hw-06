function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// {/* <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div> */}

// Напиши скрипт, який змінює кольори фону елемента <body> через
// інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.


// const widget = document.querySelector('.widget');
const colorRef = document.querySelector('.color');
const btn = document.querySelector('.change-color')


btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorRef.textContent = color;
});