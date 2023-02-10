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
  
const btn=document.getElementById('hex-btn');
const color=document.querySelector(".color");
btn.addEventListener('click',function(){
    const randomNumber1 =getRandomNumber();
    const randomNumber2 =getRandomNumber();
    const randomNumber3 =getRandomNumber();
    const hexcolor=rgbToHex(randomNumber1,randomNumber2,randomNumber3);
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;

})
