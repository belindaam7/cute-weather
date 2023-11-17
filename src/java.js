function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector(`#form-search-city`);
  let city = searchCity.value;
  let cityElement = document.querySelector(`#current-city`);
  let apiKey = `bec049cdcofb5t08d94f2fc0c3440fa3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateTemp);
  cityElement.innerHTML = city.toUpperCase();
  let dateAndTime = document.querySelector(`#date-and-time`);
  dateAndTime.innerHTML = todaysDate;
}
function updateTemp(response) {
  let currentTemp = document.querySelector(`#current-temp`);
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let weatherIcon = document.querySelector(`#weather-icon`);

  if (Math.round(response.data.temperature.current) > 75) {
    weatherIcon.innerHTML = `❂`;
  } else {
    weatherIcon.innerHTML = `❄︎`;
  }
}
let searchButton = document.querySelector(`.search-city-button`);
searchButton.addEventListener(`click`, search);

let rightNow = new Date();
let minutes = rightNow.getMinutes();
if (minutes < 10) {
  minutes = `0${hour}`;
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
console.log(minutes); //add zero to single digits 0-9
console.log(hour); //add zero to single digits 0-9
console.log(day); //assign day of week to numbers 0-6 (zero being sunday)
console.log(date); //do nothing
console.log(month); //assign month name to numbers 0-11 (zero being january)
console.log(year); //do nothing
