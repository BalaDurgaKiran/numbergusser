let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random number between 0 and 9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Calculate absolute distance between two numbers
function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

// Compare user and computer guesses with the target number
function compareGuesses(userGuess, computerGuess, targetNum) {
  // Check if user guess is out of range
  if (userGuess < 0 || userGuess > 9) {
    alert('Your guess is out of range. Please enter a number between 0 and 9.');
    return false;
  }

  const userDistance = getAbsoluteDistance(userGuess, targetNum);
  const computerDistance = getAbsoluteDistance(computerGuess, targetNum);

  if (userDistance <= computerDistance) {
    return true; // User wins
  } else {
    return false; // Computer wins
  }
}

// Update the score based on the winner
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Advance to the next round
function advanceRound() {
  currentRoundNumber++;
}

// Test your code
console.log(generateTarget()); // Should print a random number between 0 and 9

console.log(compareGuesses(4, 6, 5)); // Should print true
console.log(compareGuesses(2, 6, 5)); // Should print false
console.log(compareGuesses(10, 6, 5)); // Should alert out of range and return false

updateScore('human'); // Should increment humanScore
console.log(humanScore); // Should print 1

advanceRound(); // Should increment currentRoundNumber
console.log(currentRoundNumber); // Should print 2
