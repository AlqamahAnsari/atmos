// ChartHandler.js
let chartInstance;

export function renderTemperatureChart(forecast) {
  const ctx = document.getElementById("trendChart").getContext("2d");
  const labels = forecast.forecast.forecastday.map(day => day.date);
  const temps = forecast.forecast.forecastday.map(day => day.day.avgtemp_c);

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Avg Temp (°C)",
        data: temps,
        fill: false,
        borderColor: "#42a5f5",
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
