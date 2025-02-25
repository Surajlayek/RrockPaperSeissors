let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw , Please Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoise, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoise} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `"You Lose. ${compChoice} beats your ${userChoise}"`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoise) => {
  const compChoice = genCompChoice();

  if (userChoise === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoise === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoise, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoise = choice.getAttribute("id");

    playGame(userChoise);
  });
});
