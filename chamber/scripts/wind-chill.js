function windchill(windspeed, temperature) {
  // Get the HTML elements to updated
  const temperatureElt = document.querySelector("#temp");
  const windspeedElt = document.querySelector("#wind-speed");
  const windchillElt = document.querySelector("#wind-chill");

  // Calculate the windchill, if aplicable
  let windchillMsg = "N/A";
  if (windspeed >= 3.0 && temperature <= 50) {
    let chillfactor = Math.pow(windspeed, 0.16);
    let windchillamt = Math.round(35.74 +
        0.6212 * temperature -
        35.75 * chillfactor +
        0.4275 * temperature * chillfactor);
        
        windchillMsg = `${windchillamt}`;
  }

  // Update the HTML function with placeholder values
  temperatureElt.textContent = temperature;
  windspeedElt.textContent = windspeed;
  windchillElt.textContent = windchillMsg;

}

// Call the windchill function with placeholder values
windchill(25, 5);
