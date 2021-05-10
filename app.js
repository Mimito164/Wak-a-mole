const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score")

let result = 0;

function randomSquare(){
    square.forEach((className) => {
        className.classList.remove("mole");
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;

}

square.forEach((element) =>{
    element.addEventListener("mouseup", () =>{
        if(element.id == hitPosition){
            result += 1;
            score.textContent = result;
        }
    })
});


function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);

}

moveMole();