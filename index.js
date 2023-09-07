// const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-input");
const searchInput = document.getElementById("city-search");

// DOM handling and display generation, to be split into own module

function setColors(div, data) {
  // Change background color to match weather conditions
  switch (data.condition.split(" ")[2]) {
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
      div.style.backgroundColor = "rgb(204, 210, 210)";
      break;
    case "Light":
      div.style.backgroundColor = "rgba(220, 235, 241, 0.932)";
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
    newDiv.textContent = `${currentWeather[key]}`;
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

function updateDisplay(data) {
  makeCity(data.place);
  makeNowcast(data.current);
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
  const forcast = {};
  return { place, current, forcast };
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
