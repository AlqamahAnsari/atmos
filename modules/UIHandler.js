export default class UIHandler {
  static displayWeather(data) {
    const display = document.getElementById('weatherDisplay');
    display.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>${data.current.temp_c}°C</p>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
      <p>${data.current.condition.text}</p>
    `;
  }

  static displayForecast(data) {
    const forecastBox = document.getElementById('forecastDisplay');
    forecastBox.innerHTML = '';
    data.forecast.forecastday.forEach(day => {
      const card = document.createElement('div');
      card.className = 'forecast-card';
      card.innerHTML = `
        <p><strong>${day.date}</strong></p>
        <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" />
        <p>${day.day.avgtemp_c}°C</p>
        <p>${day.day.condition.text}</p>
      `;
      forecastBox.appendChild(card);
    });
  }

  static displayError(message) {
    const display = document.getElementById('weatherDisplay');
    display.innerHTML = `<p id="errorMessage">${message}</p>`;
    document.getElementById('forecastDisplay').innerHTML = '';
  }

  static showSuggestions(cities, onSelect) {
    const box = document.getElementById('suggestions');
    box.innerHTML = '';
    cities.forEach(city => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.textContent = `${city.name}, ${city.country}`;
      item.onclick = () => onSelect(city.name);
      box.appendChild(item);
    });
  }
}
