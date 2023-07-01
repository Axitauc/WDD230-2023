const TempNow = document.querySelector("#temp");
const WindSpeed = document.querySelector("#wind-speed");
const WindChill = document.querySelector("#wind-chill");
const WeatherIcon = document.querySelector("#weather-icon");
const Description = document.querySelector("figcaption");

const lat = 18;
const lon = 68;
const appid = "2c9692c4d272bccd1f50b2dad5746a24";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

function calcWindChill(temp, speed) {
  if (speed > 3.0 && temp <= 50) {
    let chillfactor = Math.pow(speed, 0.16);
    let windchillamt = Math.round(
      35.74 + 0.6215 * temp - 35.75 * chillfactor + 0.4275 * temp * chillfactor
    );
    return windchillamt;
  }
  return "N/A";
}

function displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(0);
  const windspeed = weatherData.wind.speed.toFixed(0);
  const desc = weatherData.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  TempNow.innerHTML = `${temp}`;
  WindSpeed.innerHTML = `${windspeed}`;
  WindChill.innerHTML = `${calcWindChill(temp, windspeed)}`;
  WeatherIcon.setAttribute("src", iconsrc);
  WeatherIcon.setAttribute("alt", desc);
  Description.textContent = desc;
}

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getWeather();
