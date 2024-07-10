//Pseudocode func getComputerChoice
// get computer choices

// store "Rock", "Paper", and "Scissors" on variable with type data array
// get random index between 0 to 2
// get value from variable according with index
// return that value

function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  return computerChoice[getRandomIndex(2)];
}

// Pseudocode func getRandomIndex
// return index with interval 0 to num

// get input with type number
// get random float from 0 to 1
// get multiply of value random float with num + 1
// get floor number from multiplication before and return that

function getRandomIndex(num) {
  return Math.floor(Math.random() * num + 1);
}

// Pseudocode func getHumanChoice
// get human choices

// get input with type string from human
// store the input on variable name humanChoice
// capitalize the humanChoice
// if humanChoice is "Rock", "Paper", or "Scissors" then return humanChoice
// if not then alert 'Please Choose between "Rock", "Paper", or "Scissors"'

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

// Pseudocode func playRound
// play Rock-Paper-Scissors game a round

// get three input, humanChoice, computerChoice and scores
// scores have array value which the first one is humanScore and the other is computerScore
// if humanChoice same with computerChoice then return log draw
// if humanChoice "Rock"
// => if computerChoice "Paper" add computerScore by 1 and log lose
// => if computerChoice "Scissors" add humanScore by 1 and log win
// if humanChoice "Paper"
// => if computerChoice "Scissors" add computerScore by 1 and log lose
// => if computerChoice "Rock" add humanScore by 1 and log win
// if humanChoice "Scissors"
// => if computerChoice "Rock" add computerScore by 1 and log lose
// => if computerChoice "Paper" add humanScore by 1 and log win

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

// Pseudocode func toCapitalCase
// capitalize the first the word

// get string Input
// check if input not string and just one character alert
// get first letter
// upperCase first letter
// get the rest letter
// lowerCase the rest letter
// concatenate the first letter with the rest letter

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

// Pseudocode func getResult
// log result and add score to the winner

// get 3 input: isWin, choices, and scores
// choices have array value which the first one is humanChoice and the other is computerChoice
// scores have array value which the first one is humanScore and the other is computerScore
// if isWin true, log 'You win! humanChoice beats computerChoice and add humanScore
// if isWin false, log 'You lose! computerChoice beats humanChoice and add computerScore

function getResult(isWin, choices, scores) {
  if (isWin) {
    scores[0]++;
    console.log(`You win! ${choices[0]} beats ${choices[1]}`);
  } else {
    scores[1]++;
    console.log(`You lose! ${choices[1]} beats ${choices[0]}`);
  }
}

// Pseudocode func playGame
// play game 5 round

// declare humanScore and computerScore and assign 0 to them
// declare scores and assign them humanScore for the first value and computerScore for the second
// loop 5 times
// => declare humanSelection and assign value from getHumanChoice
// => declare computerSelection and assign value from getHumanChoice
// => playRound with input humanSelection, computerSelection, and scores
// => re-assign humanScore and computerScore with scores

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
