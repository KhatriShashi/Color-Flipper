
const btn = document.getElementById('btn');


const color = document.getElementsByClassName("rect-box");
const colorcode = document.getElementsByClassName("color-code");

window.onload=function(){
    for(let i=0;i<color.length;i++){
        const randomNumber1 = Math.abs(getRandomNumber());
        const randomNumber2 = Math.abs(getRandomNumber());
        const randomNumber3 = Math.abs(getRandomNumber());
        color[i].style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
        colorcode[i].innerHTML = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    }
}

btn.addEventListener('click', function () {
    for(let i=0;i<color.length;i++){
        const randomNumber1 = Math.abs(getRandomNumber());
        const randomNumber2 = Math.abs(getRandomNumber());
        const randomNumber3 = Math.abs(getRandomNumber());
        color[i].style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
        colorcode[i].innerHTML = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    }
})

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 1000);
    if (randomNumber <= 255) {
        return randomNumber;
    }
    return getRandomNumber();
}