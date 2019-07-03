// Random Colors List
let colors = [];

// Pick a random color
let pickedColor = '';

// Number of Squares
let numberOfSquares = 6;

// Select all the squares
const squares = document.querySelectorAll('.square');

// Select the reset button
const resetButton = document.querySelector('#reset');

// Select the heading
const h1 = document.querySelector('h1');

// Selecting Difficulties Buttons
const modeButtons = document.querySelectorAll('.mode');

// Select Picked Color Display
const colorDisplay = document.querySelector('#colorDisplay');
// Select Message Display
const messageDisplay = document.querySelector('#message');

init();

function init() {
  // Setup Mode Buttons
  setupModeButtons();

  // Click listener for reset Button
  resetButton.addEventListener('click', () => {
    reset();
  });

  // Setup Squares
  setupSquares();

  // Reset the game
  reset();
}

function setupModeButtons() {
  // Loop through mode buttons
  modeButtons.forEach(button => {
    // Click listeners for Mode Buttons
    button.addEventListener('click', () => {
      // Remove selected class from both buttons
      modeButtons.forEach(button => {
        button.classList.remove('selected');
      });
      // Add selected class to clicked button
      button.classList.add('selected');

      // Change the number of squares
      numberOfSquares = button.textContent === 'Easy' ? 3 : 6;

      // Reset the game
      reset();
    });
  });
}

function setupSquares() {
  // Loop through all the squares
  squares.forEach((square, i) => {
    // Add click Listeners
    square.addEventListener('click', () => {
      // Get color of clicked Square
      const clickedColor = square.style.backgroundColor;

      // Compare clicked color to random color
      if (clickedColor === pickedColor) {
        // Change all the squares as the color
        changeColors(clickedColor);

        // Show the message
        messageDisplay.textContent = 'Correct!';

        // Change h1 Background Color
        h1.style.backgroundColor = clickedColor;

        // Change reset button text
        resetButton.textContent = 'Play Again?';
      } else {
        // Fade out the square
        square.classList.add('hidden');

        // Show the message
        messageDisplay.textContent = 'Try Again!';
      }
    });
  });
}

function reset() {
  // Random Colors List
  colors = generateRandomColors(numberOfSquares);

  // Pick a random color
  pickedColor = pickColor();

  // Set the color display to random color
  colorDisplay.textContent = pickedColor;

  // Loop through all the squares
  squares.forEach((square, i) => {
    if (colors[i]) {
      square.style.opacity = '1';
      // Add initial Background Color
      square.style.backgroundColor = colors[i];

      square.classList.remove('hidden');
    } else {
      square.style.opacity = '0';
    }
  });

  // Remove the message
  messageDisplay.textContent = '';

  // Change the reset button text
  resetButton.textContent = 'New Colors';

  // Reset h1 background color
  h1.style.backgroundColor = '#216583';
}

// Change all squares color
function changeColors(color) {
  // Loop through all the squares
  squares.forEach(square => {
    square.style.backgroundColor = color;
    square.classList.remove('hidden');
  });
}

// Pick a random color
function pickColor() {
  // Generate a random number
  const random = Math.floor(Math.random() * colors.length);

  // Return the random color
  return colors[random];
}

// Generate random colors list
function generateRandomColors(numberOfColors) {
  // Create an Array
  const colors = [];

  // Generate n number of Colors
  for (let i = 0; i < numberOfColors; i++) {
    colors.push(randomColor());
  }

  // Return the Array
  return colors;
}

// Generate a random color
function randomColor() {
  // Pick a "red" from 0 - 255
  const r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  const g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  const b = Math.floor(Math.random() * 256);

  // Return the rgb color
  return `rgb(${r}, ${g}, ${b})`;
}
