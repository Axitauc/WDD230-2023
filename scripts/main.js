const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.textContent = document.lastModified;

let message = new Date();
if (message.getDay() == 1 || message.getDay() == 2) {
  document.querySelector(".meeting").classList.add("active");
}
