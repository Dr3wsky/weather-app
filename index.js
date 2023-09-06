// const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-input");
const searchInput = document.getElementById("city-search");

// DOM handling and display generation, to be split into own module
function makeCity(cityData) {
  const cityContainer = document.getElementById("city-container");
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
  console.log("Look at all my divs");
}

function updateDisplay(data) {
  console.log("success");
  makeCity(data.place);
}

// Data handling, to be broken out into own module
function parseData(data) {
  const place = {
    city: data.location.name,
    country: data.location.country,
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
    alert(error);
    return null;
  }
}

// Event handlers
searchBtn.addEventListener("click", () => {
  fetchData(searchInput.value)
    .then((data) => updateDisplay(parseData(data)));
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
