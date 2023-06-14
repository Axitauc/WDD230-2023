const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.textContent = document.lastModified;

//

const button = document.querySelector("#menu-button");
button.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
  document.querySelector("#menu-close").classList.toggle("active");
  document.querySelector("#menu-open").classList.toggle("active");
});

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  new Date()
);
document.querySelector(".p-nav-bar").textContent = fulldate;

// if (today.getDay() == 1 || today.getDay() == 2) {
//   document.querySelector(".meeting").style.display = "block";
// }
