const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const lat = 19.43;
const lon = 99.13;
const appid = "2c9692c4d272bccd1f50b2dad5746a24";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}`;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

function kelvinToFahrenheit(temp) {
  return (((temp - 273.15) * 9) / 5 + 32).toFixed(0);
}

function displayResults(weatherData) {
  const currentWeather = weatherData.list[0];
  const forecasts = weatherData.list.slice(1, 4);
  const weatherContainer = document.getElementById("weather-forecast-item");

  const currentWeatherCard = createWeatherCard(currentWeather, true);
  weatherContainer.appendChild(currentWeatherCard);

  forecasts.forEach((forecast) => {
    const forecastCard = createWeatherCard(forecast, false);
    weatherContainer.appendChild(forecastCard);
  });
}

function createWeatherCard(data, isCurrent) {
  const date = new Date(data.dt * 1000); // Convertir la fecha UNIX a una fecha legible
  const temp = kelvinToFahrenheit(data.main.temp);
  const desc = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  const hum = data.main.humidity;
  const tempMin = kelvinToFahrenheit(data.main.temp_min);
  const tempMax = kelvinToFahrenheit(data.main.temp_max);

  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-card";

  const dateHeading = document.createElement("h3");
  const options = {
    weekday: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);
  dateHeading.textContent = formattedDate;

  const figure = document.createElement("figure");
  const weatherIcon = document.createElement("img");
  weatherIcon.src = iconsrc;
  weatherIcon.alt = "";
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = desc;
  figure.appendChild(weatherIcon);
  figure.appendChild(figcaption);

  const tempParagraph = document.createElement("p");
  tempParagraph.innerHTML = `<strong>${temp}</strong> &deg;F`;

  weatherCard.appendChild(dateHeading);
  weatherCard.appendChild(figure);
  weatherCard.appendChild(tempParagraph);

  if (isCurrent) {
    const humidityParagraph = document.createElement("p");
    humidityParagraph.textContent = `Humidity: ${hum}%`;
    weatherCard.appendChild(humidityParagraph);
  } else {
    const tempMinMaxParagraph = document.createElement("p");
    tempMinMaxParagraph.innerHTML = `High: ${tempMax} &deg;F<br>Low: ${tempMin} &deg;F`;
    weatherCard.appendChild(tempMinMaxParagraph);
  }

  return weatherCard;
}

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeather();
