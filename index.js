
const btn=document.getElementById('btn');
const color=document.querySelector(".color");
btn.addEventListener('click',function(){
    const randomNumber1 =Math.abs(getRandomNumber());
    const randomNumber2 =Math.abs(getRandomNumber());
    const randomNumber3 =Math.abs(getRandomNumber());
    document.body.style.backgroundColor=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    color.textContent=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

})

function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*1000);
    if(randomNumber<=255){
        return randomNumber;
    }
    return getRandomNumber();
}