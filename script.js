let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore ++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML= computerScore;
  // result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + " You Win";
   const smallUserWord = "user".fontsize(3).sub();
   const smallComputerWord = "comp".fontsize(3).sub();
   userDiv = document.getElementById(user);
 result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallComputerWord} You win `
  userDiv.classList.add('green-glow');
 setTimeout( () => userDiv.classList.remove('green-glow'), 2000)
}

function lose(user, computer) {
  computerScore ++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  userDiv = document.getElementById(user)
  result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses ${convertToWord(computer)}${smallComputerWord} You lost`
  userDiv.classList.add('red-glow');
  setTimeout( () => userDiv.classList.remove('red-glow'), 2000)
}

function draw(user, computer) {

  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  userDiv = document.getElementById(user)
  result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses ${convertToWord(computer)} ${smallComputerWord} It's a draw`
  userDiv.classList.add('grey-glow');
  setTimeout( () => userDiv.classList.remove('grey-glow'), 2000)
}
function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
     case "rs":
     case "pr":
     case "sp":
       win(userChoice, computerChoice);
       break;
    case "rp":
    case "ps":
    case "sr":
       lose(userChoice, computerChoice);
       break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
      break;

   }
}

// game();

function main() {
rock_div.addEventListener('click', () => game('r'));
paper_div.addEventListener('click',() =>game('p'));
scissors_div.addEventListener('click',() =>game('s'));
}

main();
