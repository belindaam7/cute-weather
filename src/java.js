function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector(`#form-search-city`);
  let city = searchCity.value;
  let cityElement = document.querySelector(`#current-city`);
  let apiKey = `bec049cdcofb5t08d94f2fc0c3440fa3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios(apiUrl).then(updateTemp);
  cityElement.innerHTML = city.toUpperCase();
  let dateAndTime = document.querySelector(`#date-and-time`);
  dateAndTime.innerHTML = todaysDate;
}
function updateTemp(response) {
  let currentTemp = document.querySelector(`#current-temp`);
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let humidity = document.querySelector(`#humidity`);
  let windSpeed = document.querySelector(`#wind-speed`);
  let skyCondition = document.querySelector(`#condition-description`);
  humidity.innerHTML = Math.round(response.data.temperature.humidity);
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  skyCondition.innerHTML = response.data.condition.description;
  getForecast(response.data.city);
}

function getForecast(city) {
  let apiKey = `bec049cdcofb5t08d94f2fc0c3440fa3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response.data);
  let forecastHtml = "";
  response.data.daily.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="weather-forecast-container">
    <div class="weather-forecast">
    <div class="weather-forecast-day">tue</div>
    <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
    </div>
    <span class="weather-forecast-temp-max">${Math.round(
      day.temperature.maximum
    )}°</span>
      <span class="weather-forecast-temp-min">${Math.round(
        day.temperature.minumum
      )}°</span>
        </div>
        </div>
        `;
  });
  let forecastElement = document.querySelector(`#forecast`);
  forecastElement.innerHTML = forecastHtml;
}
let searchButton = document.querySelector(`.search-city-button`);
searchButton.addEventListener(`click`, search);

let rightNow = new Date();
let minutes = rightNow.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hour = rightNow.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let day = rightNow.getDay();
let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
day = days[day];
let date = rightNow.getDate();
let month = rightNow.getMonth();
let months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];
month = months[month];
let year = rightNow.getFullYear();

let todaysDate = `${hour}:${minutes} ${day} ${month} ${date}`;
