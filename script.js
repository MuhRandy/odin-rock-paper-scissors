function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  return computerChoice[getRandomIndex(2)];
}

function getRandomIndex(num) {
  return Math.floor(Math.random() * num + 1);
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
    return console.log(
      `Draw! you choose ${humanChoice} and computer choose ${computerChoice}`
    );
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
  if (win) {
    scores[0]++;
    console.log(`You win! ${choices[0]} beats ${choices[1]}`);
  } else {
    scores[1]++;
    console.log(`You lose! ${choices[1]} beats ${choices[0]}`);
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const scores = [humanScore, computerScore];

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection, scores);
  }

  humanScore = scores[0];
  computerScore = scores[1];

  console.log("humanScore", humanScore);
  console.log("computerScore", computerScore);
}

playGame();
