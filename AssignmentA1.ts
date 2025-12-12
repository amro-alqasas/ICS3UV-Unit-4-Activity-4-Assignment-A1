/**
 * Guessing Game
 * Guess a number between 1-10
 * Enter 0 to quit
 */

// Generate random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;
let attempts = 0;

console.log("Welcome to the Guessing Game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.\n");

// Main game loop
while (guess !== secretNumber) {
  // Get user input (in a real app, use prompt or readline)
  // For this example, we'll simulate input with pre-defined guesses
  const input = prompt("Enter your guess: ");
  guess = parseInt(input || "0");
  attempts++;

  if (guess === 0) {
    console.log("Thanks for playing! The number was " + secretNumber);
    break;
  }

  if (guess < 1 || guess > 10) {
    console.log("Please enter a number between 1 and 10.");
  } else if (guess === secretNumber) {
    console.log(`Congratulations! You guessed the correct number: ${secretNumber} in ${attempts} attempts.`);
  } else {
    console.log("Try again.");
  }
}
