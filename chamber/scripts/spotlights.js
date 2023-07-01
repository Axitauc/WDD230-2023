const dataURL = "./data/directory.json";
function displaySpotlights(cardList) {
  cardList = cardList.filter(
    (x) => x.membershipLevel == "gold" || x.membershipLevel == "silver"
  );
  spotlights = [];
  for (let i = 0; i < 3; i++) {
    var elt = Math.floor(Math.random() * cardList.length);
    spotlights.push(cardList.splice(elt, 1)[0]);
  }

  var mainspotlight = document.querySelector(".containers-spotlights");

  spotlightcount = 1;
  results = spotlights.map((spotlight) => {
    var newdiv = document.createElement("div");
    newdiv.classList.add("spotlight" + spotlightcount);
    spotlightcount++;
    newdiv.innerHTML = `
        <p><a href="${spotlight.websiteURL}"><img src="${spotlight.imageURL}" alt="img"></a></p>
        <h2>${spotlight.name}</h2>
        <p>${spotlight.street}</p>
        <p>${spotlight.adCopy}</p>`;
    mainspotlight.append(newdiv);
    return `${spotlight.adCopy}`;
  });
}
async function getCardData() {
  const response = await fetch(dataURL);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.members);
  } else {
    console.error("There was an error loading the data.");
  }
}
getCardData();
