const API_KEY = 'c721b49dcaf7474e95e51250250604'; // Replace with your actual API key

export default class WeatherService {
  static async getWeather(query) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  }

  static async getForecast(query) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Forecast not available");
    return await res.json();
  }

  static async searchCities(query) {
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Search failed");
    return await res.json();
  }
}
