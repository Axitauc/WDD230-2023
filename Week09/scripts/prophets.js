const url = "./data/prophets.json";

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}</h2>
      <h3>Born on ${prophet.birthdate} on ${prophet.birthplace}.</h3>
      <img src="${prophet.imageurl}" height="300" width="250" loading="lazy" alt="Portrait of ${prophet.name} ${prophet.lastname}">`;
    cards.appendChild(card);
  });
};

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayProphets(data.prophets);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("div.cards");
    cards.innerHTML =
      "<section><h1>There was an error loading the data</h1></section>";
  }
}

getProphetData();

function getProphetDataWithThen() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("There was an error loading the data.");
        const cards = document.querySelector("div.cards");
        cards.innerHTML =
          "<section><h1>There was an error loading the data</h1></section>";
      }
    })
    .then((data) => {
      displayProphets(data.prophets);
    });
}
