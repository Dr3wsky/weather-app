/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// DOM handling, need to split out in to separate function for dom generation
const display = document.getElementById("display");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("city-search");
const searchError = document.getElementById("search-error");

// Parse fetched weather data and convert to separate objects
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
    const apiKey = "1fdeb95185c145f0809201723232908";
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;

    const response = await fetch(apiEndpoint, { mode: "cors" });
    // Alert user if invalid city search
    if (!response.ok) {
      searchError.textContent = `City "${city}" not found. Check search and try again`;
    }
    // Handle data
    const [location, current] = parseData(await response.json());
    return [location, current];
  } catch (error) {
    alert(error);
    return null;
  }
}

function runSearch() {
  const city = document.getElementById("city-search").value;

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsT0FBTyxLQUFLLEtBQUs7QUFDNUY7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBET00gaGFuZGxpbmcsIG5lZWQgdG8gc3BsaXQgb3V0IGluIHRvIHNlcGFyYXRlIGZ1bmN0aW9uIGZvciBkb20gZ2VuZXJhdGlvblxyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpO1xyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idG5cIik7XHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LXNlYXJjaFwiKTtcclxuY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1lcnJvclwiKTtcclxuXHJcbi8vIFBhcnNlIGZldGNoZWQgd2VhdGhlciBkYXRhIGFuZCBjb252ZXJ0IHRvIHNlcGFyYXRlIG9iamVjdHNcclxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcclxuICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIGRhdGU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKC01KSxcclxuICAgIHRpbWVab25lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgwLCAxMCksXHJcbiAgfTtcclxuICBjb25zdCBjdXJyZW50ID0ge1xyXG4gICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICBjb25kaXRpb25JY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcbiAgICBjbG91ZHM6IGRhdGEuY3VycmVudC5jbG91ZCxcclxuICAgIHByZWNpcDogZGF0YS5jdXJyZW50LnByZWNpcF9tbSxcclxuICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICB0ZW1wRmVlbHM6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgIHdpbmRHdXN0OiBkYXRhLmN1cnJlbnQuZ3VzdF9rcGgsXHJcbiAgICB3aW5kRGlyOiBkYXRhLmN1cnJlbnQud2luZF9kaXIsXHJcbiAgfTtcclxuICByZXR1cm4gW2xvY2F0aW9uLCBjdXJyZW50XTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGNpdHkpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQXNzaWduIGFwaSBzZWFyY2ggdXJsXHJcbiAgICBjb25zdCBhcGlLZXkgPSBcIjFmZGViOTUxODVjMTQ1ZjA4MDkyMDE3MjMyMzI5MDhcIjtcclxuICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUVuZHBvaW50LCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgLy8gQWxlcnQgdXNlciBpZiBpbnZhbGlkIGNpdHkgc2VhcmNoXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gYENpdHkgXCIke2NpdHl9XCIgbm90IGZvdW5kLiBDaGVjayBzZWFyY2ggYW5kIHRyeSBhZ2FpbmA7XHJcbiAgICB9XHJcbiAgICAvLyBIYW5kbGUgZGF0YVxyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBjdXJyZW50XSA9IHBhcnNlRGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgcmV0dXJuIFtsb2NhdGlvbiwgY3VycmVudF07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcnVuU2VhcmNoKCkge1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktc2VhcmNoXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGZldGNoV2VhdGhlcihjaXR5KTtcclxuICAvLyBkaXNwbGF5V2VhdGhlcihjdXJyZW50V2VhdGhlcik7XHJcbn1cclxuXHJcbi8vIEV2ZW50IGhhbmRsZXJzXHJcblxyXG5zZWFyY2hCdG4ub25jbGljayA9IHJ1blNlYXJjaDtcclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNlYXJjaEJ0bi5jbGljaygpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==