const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const status = document.getElementById("status");
const scores = [0, 0];

btnRock.addEventListener("click", () => {
  if (scores[0] === 5)
    return (status.textContent = `You win against computer yay!`);

  if (scores[1] === 5)
    return (status.textContent = `You lose against computer!`);

  playRound("Rock", getComputerChoice(), scores);
});

btnPaper.addEventListener("click", () =>
  playRound("Paper", getComputerChoice(), scores)
);

btnScissors.addEventListener("click", () =>
  playRound("Scissors", getComputerChoice(), scores)
);

function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  return computerChoice[getRandomIndex(2)];
}

function getRandomIndex(num) {
  return Math.floor(Math.random() * (num + 1));
}

function getHumanChoice() {
  let humanChoice = prompt('Choose between "Rock", "Paper", or "Scissors"');
  humanChoice = toCapitalCase(humanChoice);

  if (
    humanChoice === "Rock" ||
    humanChoice === "Paper" ||
    humanChoice === "Scissors"
  )
    return humanChoice;

  alert('Please Choose between "Rock", "Paper", or "Scissors"');
}

function playRound(humanChoice, computerChoice, scores) {
  if (humanChoice === computerChoice) {
    return (status.textContent = `Draw! you choose ${humanChoice} and computer choose ${computerChoice}`);
  }

  const choices = [humanChoice, computerChoice];

  switch (humanChoice) {
    case "Rock":
      switch (computerChoice) {
        case "Paper":
          getResult(false, choices, scores);
          break;

        case "Scissors":
          getResult(true, choices, scores);
          break;

        default:
          break;
      }
      break;

    case "Paper":
      switch (computerChoice) {
        case "Scissors":
          getResult(false, choices, scores);
          break;

        case "Rock":
          getResult(true, choices, scores);
          break;

        default:
          break;
      }
      break;

    case "Scissors":
      switch (computerChoice) {
        case "Rock":
          getResult(false, choices, scores);
          break;

        case "Paper":
          getResult(true, choices, scores);
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
}

function toCapitalCase(word) {
  if (typeof word !== "string" || word.length < 2)
    return alert(
      "Please just insert string and at least 2 character of letter"
    );

  let firstLetter = word[0];
  let theRestLetter = word.slice(1);

  firstLetter = firstLetter.toUpperCase();
  theRestLetter = theRestLetter.toLowerCase();

  return firstLetter + theRestLetter;
}

function getResult(win, choices, scores) {
  const score = document.getElementById("score");

  if (win) {
    scores[0]++;
    status.textContent = `You win! ${choices[0]} beats ${choices[1]}`;
    score.textContent = `Your score: ${scores[0]}\n Computer score: ${scores[1]}`;
  } else {
    scores[1]++;
    status.textContent = `You lose! ${choices[1]} beats ${choices[0]}`;
    score.textContent = `Your score: ${scores[0]}\n Computer score: ${scores[1]}`;
  }

  if (scores[0] === 5)
    return (status.textContent = `You win against computer yay!`);

  if (scores[1] === 5)
    return (status.textContent = `You lose against computer!`);
}
