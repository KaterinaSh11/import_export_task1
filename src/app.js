import { getRandomColor } from './utils';

export default function initApp() {
    console.log('Hello world');
    const btnChangeColor = document.createElement('button');
    btnChangeColor.className = 'button';
    btnChangeColor.textContent = 'Изменить цвет страницы';
    document.querySelector('body').append(btnChangeColor);

    btnChangeColor.addEventListener("click", (event) => {
            const color = getRandomColor();
            document.body.style.backgroundColor = color;
        });
  }