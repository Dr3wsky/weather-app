// DOM handling, need to split out in to separate function for dom generation
// const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("city-search");

function parseData(data) {
  const location = {
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
  return [location, current];
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
    }
    // Handle data
    const [location, current] = parseData(await response.json());
    searchFeedback.textContent = "";
    return [location, current];
  } catch (error) {
    return null;
  }
}

function runSearch() {
  const city = document.getElementById("city-search").value;
  const currentWeather = fetchWeather(city);
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
