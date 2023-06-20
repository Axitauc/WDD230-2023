const url = "./data/directory.json";

const displayMembers = (members) => {
  const cards = document.querySelector(".cards"); // select the output container element

  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.classList.add("directory-card");
    card.innerHTML = `<h1>${member.name}</h1>
      <img src="${member.imageURL}" alt="member image" />
      <p>${member.city}, ${member.state}, ${member.zip}</p>
      <p><a href="${member.websiteURL}">Website</a></p>`;
    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

async function getMemberData() {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("div.cards");
    cards.innerHTML = `
      <section>
        <h1>There was an error loading the data</h1>
      </section>`;
  }
}

getMemberData();
