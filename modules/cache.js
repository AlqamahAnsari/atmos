export function saveLastCity(city) {
  localStorage.setItem("lastCity", city);
}

export function getLastCity() {
  return localStorage.getItem("lastCity");
}

export function setupInitialCityInput(inputElement) {
  const lastCity = getLastCity();
  if (lastCity) inputElement.value = lastCity;
}
