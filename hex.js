function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*1000);
    if(randomNumber<=255){
        return randomNumber;
    }
    return getRandomNumber();
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
window.onload=function(){
    for(let i=0;i<color.length;i++){
        const randomNumber1 =getRandomNumber();
        const randomNumber2 =getRandomNumber();
        const randomNumber3 =getRandomNumber();
        const hexcolor=rgbToHex(randomNumber1,randomNumber2,randomNumber3);
        color[i].style.backgroundColor=hexcolor;
        colorcode[i].innerHTML=hexcolor;
    }
}
  
const btn = document.getElementById('btn');
const color = document.getElementsByClassName("rect-box");
const colorcode = document.getElementsByClassName("color-code");
btn.addEventListener('click',function(){
    for(let i=0;i<color.length;i++){
        const randomNumber1 =getRandomNumber();
        const randomNumber2 =getRandomNumber();
        const randomNumber3 =getRandomNumber();
        const hexcolor=rgbToHex(randomNumber1,randomNumber2,randomNumber3);
        color[i].style.backgroundColor=hexcolor;
        colorcode[i].innerHTML=hexcolor;
    }

})
