function updateTemp(response) {
  response.preventDefault();
  let currentTemp = document.querySelector(`.current-temp`);
  currentTemp.innerHTML = response.data.temperature.current;
}

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector(`#form-search-city`);
  let city = searchCity.value;
  let cityElement = document.querySelector(`#current-city`);
  cityElement.innerHTML = city;
  let apiKey = `bec049cdcofb5t08d94f2fc0c3440fa3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;
  axios.get(apiUrl).then(updateTemp);
}
let searchButton = document.querySelector(`.search-city-button`);
searchButton.addEventListener(`click`, search);
