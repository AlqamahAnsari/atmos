import WeatherService from './modules/WeatherService.js';
import UIHandler from './modules/UIHandler.js';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const suggestionsBox = document.getElementById('suggestions');
const themeBtn = document.getElementById('toggleTheme');
const loading = document.getElementById('loading');

let debounceTimeout = null;

cityInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  const query = cityInput.value.trim();
  if (!query) {
    suggestionsBox.innerHTML = '';
    return;
  }
  debounceTimeout = setTimeout(async () => {
    try {
      const cities = await WeatherService.searchCities(query);
      UIHandler.showSuggestions(cities, city => {
        cityInput.value = city;
        suggestionsBox.innerHTML = '';
      });
    } catch {
      suggestionsBox.innerHTML = '';
    }
  }, 300);
});

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return;
  try {
    loading.classList.remove('hidden');
    const current = await WeatherService.getWeather(city);
    const forecast = await WeatherService.getForecast(city);
    UIHandler.displayWeather(current);
    UIHandler.displayForecast(forecast);
  } catch (error) {
    UIHandler.displayError(error.message);
  } finally {
    loading.classList.add('hidden');
  }
});

window.addEventListener('load', async () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀️';
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
      try {
        loading.classList.remove('hidden');
        const current = await WeatherService.getWeather(coords);
        const forecast = await WeatherService.getForecast(coords);
        UIHandler.displayWeather(current);
        UIHandler.displayForecast(forecast);
      } catch (err) {
        console.log("Geolocation weather fetch failed");
      } finally {
        loading.classList.add('hidden');
      }
    });
  }
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
