const buttons = document.querySelectorAll(".button");
const computer = document.querySelector(".computer");
const output = document.querySelector(".output");

const combinations = {
   rock: "scissor",
   paper: "rock",
   scissor: "paper"
};

const keys = Object.keys(combinations);
const waitTime = 50;
const scrumbleCount = 20;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function pickWinner(playerPick, computerPick) {
   if (combinations[playerPick] === computerPick) {
      output.innerHTML = "Player Wins!";
   } else if (playerPick === computerPick) {
      output.innerHTML = "Draw!";
   } else {
      output.innerHTML = "Computer Wins!";
   }
}

async function computerMove(playerPick) {
   let computerPick = null;
   for (let i = 0; i < scrumbleCount; i++) {
      await wait(waitTime);
      computerPick = keys[Math.floor(Math.random() * keys.length)];
      computer.src = `./images/${computerPick}.png`;
   }
   pickWinner(playerPick, computerPick);
}

function handleEvent(e) {
   buttons.forEach(button => {
      button.classList = "button";
   });

   e.target.classList = "button selected";
   const playerPick = e.target.dataset.type;
   computerMove(playerPick);
}

buttons.forEach(button => {
   button.addEventListener("click", handleEvent);
});