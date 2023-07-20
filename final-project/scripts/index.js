// Get the current total number of specialty drinks from localStorage
let totalDrinks = parseInt(localStorage.getItem("totalDrinks")) || 0;

// Increment the total number of specialty drinks
totalDrinks++;

// Store the updated total number of drinks in localStorage
localStorage.setItem("totalDrinks", totalDrinks);

// Redireccionar a la página de confirmación
window.location.href = "confirmation.html";
b;
