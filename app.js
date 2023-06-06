const colors = ["blue", "green", "red", "rgba(133,122,200)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){

    const rendomNumber = getRandomNumber();
    console.log(rendomNumber);
    document.body.style.backgroundColor = colors[rendomNumber];
    color.textContent = colors[rendomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}