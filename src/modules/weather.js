const weather = (() => {
  // Clean data into only useable data objects, to pass to display handling
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

    const forecast = [];
    for (let day = 0; day < data.forecast.forecastday.length; day++) {
      const willSnow = data.forecast.forecastday[day].day.daily_will_it_snow;
      forecast[day] = {
        date: data.forecast.forecastday[day].date,
        conditionIcon: data.forecast.forecastday[day].day.condition.icon,
        condition: data.forecast.forecastday[day].day.condition.text,
        maxTemps: `High: ${data.forecast.forecastday[day].day.maxtemp_c} °C`,
        minTemps: `Low: ${data.forecast.forecastday[day].day.mintemp_c} °C`,
        humidity: `Humidity: ${data.forecast.forecastday[day].day.avghumidity}% Humidity`,
        precip: ((willSnow) ? `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_snow}% chance` : `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_rain}% chance`),
        precipTotal: ((willSnow) ? `Total: ${data.forecast.forecastday[day].day.totalsnow_cm}cm snow` : `Total: ${data.forecast.forecastday[day].day.totalprecip_mm}mm rain`),
        sunrise: `Sunrise: ${data.forecast.forecastday[day].astro.sunrise}`,
        sunset: `Sunset: ${data.forecast.forecastday[day].astro.sunset}`,
      };
    }
    return { place, current, forecast };
  }

  // Fetch data with async func
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
  return { fetchData, parseData };
})();

export default weather;
