const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const main = document.querySelector('main');
const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    colorValue = getRandomColor();
    main.style.backgroundColor = colorValue;
    color.textContent = colorValue;
})

function getRandomColor() {
    let hexCode = "#"
    for (i = 0; i < 6; i++) {
        rndNum = Math.floor(Math.random() * hex.length);
        hexCode += hex[rndNum];
    }
    return hexCode;
}