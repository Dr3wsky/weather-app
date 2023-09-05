// const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("city-search");

// DOM handling and display generation, to be split into own module
function makeCity(city) {
  const cityContainer = document.createElement("div");
  cityContainer.className = "city-container";
  const searchContainer = document.getElementById("search-container");
  searchContainer.appendChild(cityContainer);

  const keys = Object.keys(city);
  keys.forEach((key) => {
    const newDiv = document.createElement("div");
    newDiv.className = `${key}`;
    newDiv.textContent = `${city[key]}`;
  });
}

function updateDisplay(data) {
  makeCity(data.place);
  // makeCurrent(data[1])
}

// Data handling, to be broken out into own module
function parseData(data) {
  const place = {
    country: data.location.country,
    city: data.location.name,
    date: data.location.localtime.slice(-5),
    timeZone: data.location.localtime.slice(0, 10),
  };
  const current = {
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    clouds: data.current.cloud,
    precip: data.current.precip_mm,
    temp: data.current.temp_c,
    tempFeels: data.current.feelslike_c,
    wind: data.current.wind_kph,
    windGust: data.current.gust_kph,
    windDir: data.current.wind_dir,
  };
  const forcast = {};
  return { place, current, forcast };
}

async function fetchWeather(city) {
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
    const data = parseData(await response.json());
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}

function runSearch() {
  const city = document.getElementById("city-search").value;
  fetchWeather(city);
}

// Event handlers
searchBtn.onclick = runSearch;
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  }
});
