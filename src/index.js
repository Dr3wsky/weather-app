// Imports for webpack modules
import "./assets/styles.css";
import weather from "./modules/weather";
import display from "./modules/display";

const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-input");
const searchInput = document.getElementById("city-search");

// Data handling, to be broken out into own module

// Event handlers
searchBtn.addEventListener("click", () => {
  weather.fetchData(searchInput.value)
    .then((data) => display.updateDisplay(weather.parseData(data)));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
