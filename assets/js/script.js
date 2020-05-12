let gameButton = document.getElementsByClassName("gamebutton");
let startButton = document.querySelectorAll("data-start");
let allButton = document.querySelectorAll("button")
let playerScoreboard = document.querySelector("data-playerscore");
let iaScoreboard = document.querySelector("data-iascore");


// allButton.forEach(function(element){
//     element.onclick = function(){
//         let buttonValue = element.dataset.input;
//         console.log(buttonValue);
//     }
// })

gameButton.onclick = function(element){
    let buttonValue = element.dataset.input;
    console.log(buttonValue)
}
startButton.onclick = function(element){
 let jankenStart = element.dataset.start; 
 console.log("Heaven");}


gamestart.addEventListener("click", gameStart);

function gameStart() {
    gameButton.forEach(function (element) {
            element.onclick = function () {
                if (element.dataset.input == rock) {
                    alert('DRAW')
                } else {
                    alert("Choississez un autre chiffre");
                }
            }
        });
    }