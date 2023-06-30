// Change directory mode

let gridSelector = document.querySelector("#grid");
let listSelector = document.querySelector("#list");
let directoryData = document.querySelector("#data");

gridSelector.addEventListener("click", () => {
  if (!gridSelector.classList.contains("active")) {
    gridSelector.classList.add("active");
    listSelector.classList.remove("active");
    directoryData.classList.add("cards");
    directoryData.classList.remove("list");
  }
});

listSelector.addEventListener("click", () => {
  if (!listSelector.classList.contains("active")) {
    listSelector.classList.add("active");
    gridSelector.classList.remove("active");
    directoryData.classList.add("list");
    directoryData.classList.remove("cards");
  }
});

const url = "./data/directory.json";

const displayMembers = (members) => {
  const cards = document.querySelector(".cards");

  members.forEach((member) => {
    let card = document.createElement("section");
    card.classList.add("cards");
    if (member.membershipLevel == "gold") {
      card.classList.add("gold-member");
    } else if (member.membershipLevel == "bronze") {
      card.classList.add("bronze-member");
    } else if (member.membershipLevel == "silver") {
      card.classList.add("silver-member");
    } else if (member.membershipLevel == "np") {
      card.classList.add("non-member");
    }
    card.innerHTML = `
    <img src="${member.imageURL}" alt="member image">
    <h2>${member.name}</h2>
    <p>${member.street}</p>
    <p> ${member.city}, ${member.state} ${member.zip}</p>
    <p>${member.phone}</p>
    <p><a href="${member.websiteURL}">Visit</a></p>`;
    cards.appendChild(card);
  });
};

async function getMemberData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("div.cards");
    cards.innerHTML =
      "<section><h1>There was an error loading the data</h1></section>";
  }
}

getMemberData();
