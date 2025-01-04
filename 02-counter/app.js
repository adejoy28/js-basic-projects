// get the parameter
const value = document.querySelector("#value");
// value.textContent = 1;
const btns = document.querySelectorAll(".btn");
// btn.textContent = 3;


// console.log(btns);
let count = 0;
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        classList = e.currentTarget.classList;
        if (classList.contains('decrease')) {
            count = --count;
        } else if (classList.contains('increase')) {
            count = ++count;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        checkValueForStyles(count, value)
    })
})

function checkValueForStyles(c /*count*/, v /*for value */) {
    if (c > 0) v.style.color = "green";
    else if (c < 0) v.style.color = "red";
    else v.style.color = "#102a42";
}



