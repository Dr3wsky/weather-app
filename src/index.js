// Imports for webpack bundle
import "./assets/styles.css";

/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
// const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-input");
const searchInput = document.getElementById("city-search");

// DOM handling and display generation, to be split into own module

function setColors(div, data) {
  const splitIdx = ((div.classList[0] !== "forecast-day") ? 2 : 0);
  // Change background color to match weather conditions
  switch (data.condition.split(" ")[splitIdx]) {
    case "Clear":
      div.style.backgroundColor = "white";
      break;
    case "Sunny":
      div.style.backgroundColor = "rgba(254, 254, 176, 0.983)";
      break;
    case "Partly":
      div.style.backgroundColor = "rgba(186, 231, 230, 0.983)";
      break;
    case "Cloudy":
      div.style.backgroundColor = "rgba(225, 225, 225, 0.9)";
      break;
    case "Overcast":
      div.style.backgroundColor = "rgb(225, 225, 225, 0.683)";
      break;
    case "Light":
      div.style.backgroundColor = "rgba(220, 235, 241, 0.932)";
      break;
    case "Moderate":
      div.style.backgroundColor = "rgba(161, 207, 226, 0.932)";
      break;
    case "Heavy":
      div.style.backgroundColor = "rgba(83, 163, 197, 0.932)";
      break;
    case "Fog":
      div.style.backgroundColor = "rgba(220, 235, 241, 0.932)";
      break;
    case "Patchy":
      div.style.backgroundColor = "rgb(228, 229, 182)";
      break;
    default:
      div.style.backgroundColor = "white";
  }
}

function makeCity(cityData) {
  const cityContainer = document.getElementById("city");
  if (cityContainer.hasChildNodes()) {
    cityContainer.innerHTML = "";
  }
  const titleUpdate = document.getElementById("title");
  titleUpdate.textContent = `What's the weather in ${cityData.city}?`;

  // Populate city data from data object
  const keys = Object.keys(cityData);
  keys.forEach((key) => {
    const newDiv = document.createElement("div");
    newDiv.className = `${key}`;
    newDiv.textContent = `${cityData[key]}`;
    cityContainer.appendChild(newDiv);
  });
  cityContainer.classList.add("visible");
}

function makeNowcast(currentWeather) {
  const nowcastContainer = document.getElementById("nowcast");
  if (nowcastContainer.hasChildNodes()) {
    nowcastContainer.innerHTML = "";
  }
  setColors(nowcastContainer, currentWeather);

  // Populate nowcast from data object
  const keys = Object.keys(currentWeather);
  keys.forEach((key) => {
    const newDiv = document.createElement("div");
    newDiv.className = `${key}`;
    if (key === "condition") {
      newDiv.innerHTML = `Current Weather<br>${currentWeather[key]}`;
    } else {
      newDiv.textContent = `${currentWeather[key]}`;
    }
    nowcastContainer.appendChild(newDiv);
    // Create image for icon key
    if (key === "conditionIcon") {
      newDiv.innerHTML = "";
      const icon = document.createElement("img");
      icon.src = `${currentWeather[key]}`;
      newDiv.appendChild(icon);
    }
  });
  nowcastContainer.classList.add("visible");
}

function makeForecast(forecastData) {
  const forecastContainer = document.getElementById("forecast");
  if (forecastContainer.hasChildNodes()) {
    forecastContainer.innerHTML = "";
  }

  let dayNum = 0;
  forecastData.forEach((day) => {
    // Create Div for each day
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecast-day";
    dayDiv.setAttribute("data-day-num", `${dayNum}`);
    forecastContainer.appendChild(dayDiv);
    dayDiv.classList.add("visible");
    dayDiv.classList.add("container");
    setColors(dayDiv, day);

    // Fill div with data
    // eslint-disable-next-line no-restricted-syntax
    for (const key in day) {
      const newDiv = document.createElement("div");
      newDiv.className = `${key}`;
      if (key === "date") {
        switch (dayNum) {
          case 0:
            newDiv.innerHTML = `Today<br>${day[key]}`;
            break;
          case 1:
            newDiv.innerHTML = `Tomorrow<br>${day[key]}`;
            break;
          case 2:
            newDiv.innerHTML = `Day After Torrow<br>${day[key]}`;
            break;
          case 3:
            newDiv.innerHTML = `Day After That<br>${day[key]}`;
            break;
          default:
            newDiv.innerHTML = "";
        }
      } else {
        newDiv.textContent = `${day[key]}`;
      }

      dayDiv.appendChild(newDiv);
      if (key === "conditionIcon") {
        newDiv.innerHTML = "";
        const icon = document.createElement("img");
        icon.src = `${day[key]}`;
        newDiv.appendChild(icon);
      }
    }
    dayNum++;
  });
}

function updateDisplay(data) {
  makeCity(data.place);
  makeNowcast(data.current);
  makeForecast(data.forecast);
}

// Data handling, to be broken out into own module
function parseData(data) {
  const place = {
    city: data.location.name,
    region: `${data.location.region}, ${data.location.country}`,
    time: `Local Time: ${data.location.localtime.slice(-5)}`,
    date: `Today: ${data.location.localtime.slice(0, 10)}`,
  };
  const current = {
    condition: `${data.current.temp_c} °C, ${data.current.condition.text}`,
    conditionIcon: data.current.condition.icon,
    precip: `Precip: ${data.current.precip_mm} mm`,
    wind: `Wind: ${data.current.wind_kph} kph, ${data.current.wind_dir}`,
    feelsLike: `Gusting to ${data.current.gust_kph} kph, Feels like ${data.current.feelslike_c} °C`,
  };

  const forecast = [];
  for (let day = 0; day < data.forecast.forecastday.length; day++) {
    const willSnow = data.forecast.forecastday[day].day.daily_will_it_snow;
    forecast[day] = {
      date: data.forecast.forecastday[day].date,
      conditionIcon: data.forecast.forecastday[day].day.condition.icon,
      condition: data.forecast.forecastday[day].day.condition.text,
      maxTemps: `High: ${data.forecast.forecastday[day].day.maxtemp_c} °C`,
      minTemps: `Low: ${data.forecast.forecastday[day].day.mintemp_c} °C`,
      humidity: `Humidity: ${data.forecast.forecastday[day].day.avghumidity}% Humidity`,
      precip: ((willSnow) ? `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_snow}% chance` : `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_rain}% chance`),
      precipTotal: ((willSnow) ? `Total: ${data.forecast.forecastday[day].day.totalsnow_cm}cm snow` : `Total: ${data.forecast.forecastday[day].day.totalprecip_mm}mm rain`),
      sunrise: `Sunrise: ${data.forecast.forecastday[day].astro.sunrise}`,
      sunset: `Sunset: ${data.forecast.forecastday[day].astro.sunset}`,
    };
  }
  return { place, current, forecast };
}

async function fetchData(city) {
  try {
    // Assign api search url
    const searchFeedback = document.getElementById("search-feedback");
    searchFeedback.textContent = "Searching . . . ";
    const apiKey = "1fdeb95185c145f0809201723232908";
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;

    const response = await fetch(apiEndpoint, { mode: "cors" });
    // Alert user if invalid city search
    if (!response.ok) {
      searchFeedback.textContent = `City "${city}" not found. Check search and try again`;
    } else {
      searchFeedback.textContent = "";
    }
    // Handle data
    const data = response.json();
    return data;
  } catch (error) {
    return null;
  }
}

// Event handlers
searchBtn.addEventListener("click", () => {
  fetchData(searchInput.value)
    .then((data) => updateDisplay(parseData(data)));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
