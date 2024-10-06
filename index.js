function changeDice() {
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const image = "dice" + randomNumber1 + ".png";
const randomImageSource = "images/" + image;
const img1 = document.querySelectorAll('img')[0];
img1.setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const images = "dice" + randomNumber2 + ".png";
const randomImageSource2 = "images/" + images;
const img2 = document.querySelectorAll('img')[1];
img2.setAttribute("src", randomImageSource2);

const checkwinner = document.getElementById("checkwinner");
if (randomNumber1 > randomNumber2) {
     checkwinner.textContent = "Player 1 wins"
} else if(randomNumber2 > randomNumber1) {
    checkwinner.textContent = "player 2 wins"
} else if (randomNumber1 == randomNumber2) {
    checkwinner.textContent = "TIE GAME!!"
}

// counts();
playRollingSound();
}

function counts () {
   
const player1Score = document.getElementById("player1count");
const randomNumberscore1 = Math.floor(Math.random() * 6 + 1);
let player1ScoreElement = 0;
while (randomNumberscore1 > randomNumberscore2) {
   player1ScoreElement+=1;
   player1Score.textContent = player1ScoreElement;
} player1ScoreElement++;

const player2Score = document.getElementById("player2count");
const randomNumberscore2 = Math.floor(Math.random() * 6 + 1);
let player2ScoreElement = 0;
while (randomNumberscore2 > randomNumberscore1) {
   player2ScoreElement+=1;
   player2Score.textContent = player1ScoreElement;
} player2ScoreElement++;
} 

function exitGame() {
   const quitgame = confirm("are you sure you want to quit");
     if(quitgame) {
        document.location.href = "homedice.html"
     } else {
      alert("ok! let`s continue")
     }
}

function playRollingSound() {
   let sound = new Audio("sound/soundroll.mp3");
   sound.play();
}
