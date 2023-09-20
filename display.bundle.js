/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/* eslint-disable guard-for-in */
const display = (() => {
  // Change background of weather tile from condition description
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
  // Make city DOM from cleaned location data
  function makeCity(cityData) {
    // Make new element and clear old data
    const cityContainer = document.getElementById("city");
    if (cityContainer.hasChildNodes()) {
      cityContainer.innerHTML = "";
    }
    const titleUpdate = document.getElementById("title");
    titleUpdate.textContent = `What's the weather in ${cityData.city}?`;

    // Populate DOM from city data object
    const keys = Object.keys(cityData);
    keys.forEach((key) => {
      const newDiv = document.createElement("div");
      newDiv.className = `${key}`;
      newDiv.textContent = `${cityData[key]}`;
      cityContainer.appendChild(newDiv);
    });
    cityContainer.classList.add("visible");
  }

  //   Make DOM for current weather conditions
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

  //   Make DOM for weather forcase from cleaned data object
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
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSTtBQUNoQztBQUNBLGlEQUFpRCxvQkFBb0I7QUFDckUsUUFBUTtBQUNSLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0NBQWtDLFNBQVM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgLy8gQ2hhbmdlIGJhY2tncm91bmQgb2Ygd2VhdGhlciB0aWxlIGZyb20gY29uZGl0aW9uIGRlc2NyaXB0aW9uXG4gIGZ1bmN0aW9uIHNldENvbG9ycyhkaXYsIGRhdGEpIHtcbiAgICBjb25zdCBzcGxpdElkeCA9ICgoZGl2LmNsYXNzTGlzdFswXSAhPT0gXCJmb3JlY2FzdC1kYXlcIikgPyAyIDogMCk7XG4gICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggd2VhdGhlciBjb25kaXRpb25zXG4gICAgc3dpdGNoIChkYXRhLmNvbmRpdGlvbi5zcGxpdChcIiBcIilbc3BsaXRJZHhdKSB7XG4gICAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTQsIDI1NCwgMTc2LCAwLjk4MylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiUGFydGx5XCI6XG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTg2LCAyMzEsIDIzMCwgMC45ODMpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNsb3VkeVwiOlxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOSlcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIyNSwgMjI1LCAyMjUsIDAuNjgzKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJMaWdodFwiOlxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIyMCwgMjM1LCAyNDEsIDAuOTMyKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNb2RlcmF0ZVwiOlxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDE2MSwgMjA3LCAyMjYsIDAuOTMyKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIZWF2eVwiOlxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDgzLCAxNjMsIDE5NywgMC45MzIpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkZvZ1wiOlxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIyMCwgMjM1LCAyNDEsIDAuOTMyKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJQYXRjaHlcIjpcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIyOCwgMjI5LCAxODIpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG4gIH1cbiAgLy8gTWFrZSBjaXR5IERPTSBmcm9tIGNsZWFuZWQgbG9jYXRpb24gZGF0YVxuICBmdW5jdGlvbiBtYWtlQ2l0eShjaXR5RGF0YSkge1xuICAgIC8vIE1ha2UgbmV3IGVsZW1lbnQgYW5kIGNsZWFyIG9sZCBkYXRhXG4gICAgY29uc3QgY2l0eUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgICBpZiAoY2l0eUNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIGNpdHlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgdGl0bGVVcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICAgIHRpdGxlVXBkYXRlLnRleHRDb250ZW50ID0gYFdoYXQncyB0aGUgd2VhdGhlciBpbiAke2NpdHlEYXRhLmNpdHl9P2A7XG5cbiAgICAvLyBQb3B1bGF0ZSBET00gZnJvbSBjaXR5IGRhdGEgb2JqZWN0XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNpdHlEYXRhKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBgJHtrZXl9YDtcbiAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGAke2NpdHlEYXRhW2tleV19YDtcbiAgICAgIGNpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9KTtcbiAgICBjaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICB9XG5cbiAgLy8gICBNYWtlIERPTSBmb3IgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGlvbnNcbiAgZnVuY3Rpb24gbWFrZU5vd2Nhc3QoY3VycmVudFdlYXRoZXIpIHtcbiAgICBjb25zdCBub3djYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3djYXN0XCIpO1xuICAgIGlmIChub3djYXN0Q29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgbm93Y2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBzZXRDb2xvcnMobm93Y2FzdENvbnRhaW5lciwgY3VycmVudFdlYXRoZXIpO1xuXG4gICAgLy8gUG9wdWxhdGUgbm93Y2FzdCBmcm9tIGRhdGEgb2JqZWN0XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRXZWF0aGVyKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBgJHtrZXl9YDtcbiAgICAgIGlmIChrZXkgPT09IFwiY29uZGl0aW9uXCIpIHtcbiAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9IGBDdXJyZW50IFdlYXRoZXI8YnI+JHtjdXJyZW50V2VhdGhlcltrZXldfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlcltrZXldfWA7XG4gICAgICB9XG4gICAgICBub3djYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAvLyBDcmVhdGUgaW1hZ2UgZm9yIGljb24ga2V5XG4gICAgICBpZiAoa2V5ID09PSBcImNvbmRpdGlvbkljb25cIikge1xuICAgICAgICBuZXdEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGljb24uc3JjID0gYCR7Y3VycmVudFdlYXRoZXJba2V5XX1gO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbm93Y2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfVxuXG4gIC8vICAgTWFrZSBET00gZm9yIHdlYXRoZXIgZm9yY2FzZSBmcm9tIGNsZWFuZWQgZGF0YSBvYmplY3RcbiAgZnVuY3Rpb24gbWFrZUZvcmVjYXN0KGZvcmVjYXN0RGF0YSkge1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgICBpZiAoZm9yZWNhc3RDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBmb3JlY2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGxldCBkYXlOdW0gPSAwO1xuICAgIGZvcmVjYXN0RGF0YS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAvLyBDcmVhdGUgRGl2IGZvciBlYWNoIGRheVxuICAgICAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRheURpdi5jbGFzc05hbWUgPSBcImZvcmVjYXN0LWRheVwiO1xuICAgICAgZGF5RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtZGF5LW51bVwiLCBgJHtkYXlOdW19YCk7XG4gICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlEaXYpO1xuICAgICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICBzZXRDb2xvcnMoZGF5RGl2LCBkYXkpO1xuXG4gICAgICAvLyBGaWxsIGRpdiB3aXRoIGRhdGFcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF5KSB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBgJHtrZXl9YDtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICBzd2l0Y2ggKGRheU51bSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJIVE1MID0gYFRvZGF5PGJyPiR7ZGF5W2tleV19YDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBgVG9tb3Jyb3c8YnI+JHtkYXlba2V5XX1gO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9IGBEYXkgQWZ0ZXIgVG9ycm93PGJyPiR7ZGF5W2tleV19YDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gYCR7ZGF5W2tleV19YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICBpZiAoa2V5ID09PSBcImNvbmRpdGlvbkljb25cIikge1xuICAgICAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGljb24uc3JjID0gYCR7ZGF5W2tleV19YDtcbiAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRheU51bSsrO1xuICAgIH0pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==