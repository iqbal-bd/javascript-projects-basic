const numOne = Math.ceil(Math.random()*10);
const numTwo = Math.ceil(Math.random()*10);

const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const form = document.getElementById("form");
const input = document.getElementById("input");
const scoreBoard = document.getElementById("score");

questionOne.innerText = `${numOne}`;
questionTwo.innerText = `${numTwo}`;

questionOne.style.color="red";
questionTwo.style.color="yellow";

const correctAnswer = numOne * numTwo;


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreBoard.innerText = `Your Score: ${score}`;

form.addEventListener("submit", ()=>{
    const userAnswer = +input.value;
    
    if(userAnswer == "" || isNaN(userAnswer)){
        window.alert("OOP? please type any number..")
        return
    }
    if(userAnswer === correctAnswer){
        score++;
        console.log(score)
        updateLocalStorage();
    }else{
        score--;
        console.log(score)
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

