function generateRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
  let randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string
  let hexColor = randomNumber.toString(16);

  // Pad the string with leading zeros if it's less than 6 characters long
  // This ensures a full 6-digit hexadecimal color code
  hexColor = hexColor.padStart(6, '0');

  // Prepend '#' to create a valid hexadecimal color code
  return `#${hexColor}`;
  
}


function randomColourConvertOne(){
  let bodybg = document.getElementById("body1");
  bodybg.style.backgroundColor=generateRandomHexColor();
}

function randomColourConvertTwo(){
  let bodybg = document.getElementById("body2");
  bodybg.style.backgroundColor=generateRandomHexColor();
}

function navigateToAndScroll(url) {
  window.location.href = url; // Navigate to the target page
}

// This part runs on the *target page* after it loads
window.onload = function() {
  const hash = window.location.hash; // Get the hash from the URL (e.g., "#targetSection")
  if (hash) {
      const targetElement = document.querySelector(hash); // Find the element by its ID
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
      }
  }
};


let black = document.getElementById('noir');

black.addEventListener('mouseenter', () => {
  black.textContent = '#000000';
  black.style.color = 'white';
});

black.addEventListener('mouseleave', () => {
  black.style.backgroundColor = "#000000"; 
  black.textContent = "";
});

let brown = document.getElementById('brun');

brown.addEventListener('mouseenter', () => {
  brown.textContent = '#613915';
  brown.style.color = 'white';
});

brown.addEventListener('mouseleave', () => {
  brown.style.backgroundColor = "#613915"; 
  brown.textContent = "";
});

let red = document.getElementById('rouge');

red.addEventListener('mouseenter', () => {
  red.textContent = '#E50000';
  red.style.color = 'white';
});

red.addEventListener('mouseleave', () => {
  red.style.backgroundColor = "#E50000"; 
  red.textContent = "";
});

let orange = document.getElementById('orange');

orange.addEventListener('mouseenter', () => {
  orange.textContent = '#FF8D00';
  orange.style.color = 'black';
});

orange.addEventListener('mouseleave', () => {
  orange.style.backgroundColor = "#FF8D00"; 
  orange.textContent = "";
});

let yellow = document.getElementById('jaune');

yellow.addEventListener('mouseenter', () => {
  yellow.textContent = '#FFEE00';
  yellow.style.color = 'black';
});

yellow.addEventListener('mouseleave', () => {
  yellow.style.backgroundColor = "#FFEE00"; 
  yellow.textContent = "";
});

let noboGreen = document.getElementById('vert-clair');

noboGreen.addEventListener('mouseenter', () => {
  noboGreen.textContent = '#BAF484';
  noboGreen.style.color = 'black';
});

noboGreen.addEventListener('mouseleave', () => {
  noboGreen.style.backgroundColor = "#BAF484"; 
  noboGreen.textContent = "";
});

let green = document.getElementById('verte');

green.addEventListener('mouseenter', () => {
  green.textContent = '#1FB544';
  green.style.color = 'white';
});

green.addEventListener('mouseleave', () => {
  green.style.backgroundColor = "#1FB544"; 
  green.textContent = "";
});

let blue = document.getElementById('bleu');

blue.addEventListener('mouseenter', () => {
  blue.textContent = '#0772FF';
  blue.style.color = 'white';
});

blue.addEventListener('mouseleave', () => {
  blue.style.backgroundColor = "#0772FF"; 
  blue.textContent = "";
});

let purple = document.getElementById('violette');

purple.addEventListener('mouseenter', () => {
  purple.textContent = '#760088';
  purple.style.color = 'white';
});

purple.addEventListener('mouseleave', () => {
  purple.style.backgroundColor = "#760088"; 
  purple.textContent = "";
});