// const { data } = require("browserslist");

// DOM handling
const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("location-search");
const searchError = document.getElementById("search-error");
const apiBase = "https://api.weatherapi.com/v1/current.json?key=1fdeb95185c145f0809201723232908&q=";

// Functions to search and return gifs

// function convertData(data) {
//   const {
//     name = cityName,
//     main: {temp: tempertature, feels_like: feels_like}
//   }
// }

async function fetchWeather(city) {
  try {
    // Assign api search url
    const apiKey = "1fdeb95185c145f0809201723232908";
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;

    const response = await fetch(apiEndpoint, { mode: "cors" });
    // Alert user if invalid city search
    if (!response.ok) {
      searchError.textContent = `City "${city}" not found. Check search and try again`;
    }
    // Handle data
    const data = await response.json();
    // const data = convertData(await response.json());
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}

function runSearch() {
  const city = document.getElementById("location-search").value;

  const currentWeather = fetchWeather(city);
  // displayWeather(currentWeather);
}

// Event handlers

searchBtn.onclick = runSearch;
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  }
});
