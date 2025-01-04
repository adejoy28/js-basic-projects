const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn-hero");
const rndColorDisp = document.querySelector('.value');
const container = document.querySelector('main');

btn.addEventListener('click', function () {
    // alert('I\'m clicked');
    rndColor = getRndColor();
    container.style.backgroundColor = colors[rndColor];
    rndColorDisp.textContent = colors[rndColor];
});

function getRndColor() {
    return Math.floor(Math.random()* colors.length);
}