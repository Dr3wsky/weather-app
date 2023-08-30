import weather from "./modules/weather.js";

// DOM handling, need to split out in to separate function for dom generation
const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("city-search");

// Event handlers
searchBtn.onclick = weather.runSearch;
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  }
});
