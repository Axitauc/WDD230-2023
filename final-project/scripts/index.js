// Get the total number of specialty drinks from localStorage
const totalDrinks = parseInt(localStorage.getItem("totalDrinks")) || 0;

// Display the total number of drinks in the information card
document.getElementById("total-drinks-output").textContent = totalDrinks.toString();