# Atmos

A simple yet powerful **Atmos** built with **HTML, CSS, and JavaScript**.  
It uses the [WeatherAPI](https://www.weatherapi.com/) to fetch **current weather**, **5-day forecast**, and **city search suggestions** with a responsive UI and dark/light mode support.

<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/b39c19ef-0894-4bc6-9d6f-5ca0a2c92723" />



## Features
- **City Search with Suggestions** (debounced autocomplete)
- **Geolocation Support** – shows your local weather on load
- **Current Weather** (temperature, condition, icon)
- **5-Day Forecast** with daily conditions
- **Dark / Light Theme Toggle** (persists via localStorage)
- **Error Handling & Loading Indicator**
- **Responsive Design** with forecast cards


## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES Modules)
- **API**: [WeatherAPI.com](https://www.weatherapi.com/)
- **Modules**:
  - `WeatherService.js` → API calls
  - `UIHandler.js` → DOM rendering
  - `main.js` → App logic (search, geolocation, theme)


## Project Structure
```
weather-dashboard/
│── index.html         # Main HTML file
│── style.css          # Styling (light/dark themes)
│── main.js            # Core logic
│── modules/
│   ├── WeatherService.js # API interactions
│   └── UIHandler.js      # UI updates
└── README.md
```


## Setup & Installation
1. **Clone this repository**:
   ```bash
   git clone https://github.com/alqamahansari/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Get an API key** from [WeatherAPI](https://www.weatherapi.com/).

3. **Add your API key** to `WeatherService.js`:
   ```js
   const API_KEY = "your_api_key_here";
   ```

4. **Run locally** by opening `index.html` in your browser.  
   (No server required, works with plain static hosting.)


## Live Demo
[Live Demo](http://alqamahansari.github.io/weather-dashboard/)


## Future Improvements
- Support multiple units (°C / °F toggle)
- Hourly forecast view
- Weather charts using Recharts/D3.js
- Service worker for offline caching
- Background image based on weather condition


## Contributing
Pull requests are welcome! If you’d like to suggest improvements, feel free to open an issue.


## License
This project is licensed under the **MIT License**.


## Author
Built with ❤️ by **[Mohammad Alquamah Ansari](https://github.com/alqamahansari)**
