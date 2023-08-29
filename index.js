// const { data } = require("browserslist");

// DOM handling
const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("location-search");
const searchError = document.getElementById("search-error");
const apiBase = "https://api.weatherapi.com/v1/current.json?key=1fdeb95185c145f0809201723232908&q=";

// Functions to search and return gifs

async function fetchWeather(location) {
  try {
    const response = await fetch(apiBase.concat(location), { mode: "cors" });
    const weatherData = await response.json();
    searchError.textContent = "";
    return weatherData;
  } catch (e) {
    searchError.textContent = "Invalid search, cannot find location. Try again.";
  }
}

function runSearch() {
  const location = document.getElementById("location-search").value;
  const currentWeather = fetchWeather(location);
  console.log(currentWeather);
}

// Event handlers

searchBtn.onclick = runSearch;
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  }
});
