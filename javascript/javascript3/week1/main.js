//Using city name as input
document
  .getElementById("inputButtonId")
  .addEventListener("click", function (event) {
    (async function () {
      const weatherData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          document.getElementById("cityNameInputId").value +
          "&appid=a9a4924b301fedae29f7f402ae447166"
      );
      // to save the data in localstorage
      localStorage.setItem(
        "myCity",
        document.getElementById("cityNameInputId").value
      );
      const weatherInfo = await weatherData.json();
      allWeatherData(weatherInfo);
    })();
  });
//Using user's current latitude and longitude
document
  .getElementById("logLocationButtonId")
  .addEventListener("click", logLocationFunction);
function logLocationFunction() {
  navigator.geolocation.getCurrentPosition((success) =>
    (async function () {
      const weatherData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          success.coords.latitude +
          "&lon=" +
          success.coords.longitude +
          "&appid=a9a4924b301fedae29f7f402ae447166"
      );
      const weatherInfo = await weatherData.json();
      // to save the data in localstorage
      localStorage.setItem("myCity", weatherInfo.name);
      allWeatherData(weatherInfo);
    })()
  );
}
// Function to get sunrise and sunset time in hh:mm format.
function timestampToTime(x) {
  var date = new Date(x * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var formatTime = hours + ":" + minutes.toString().padStart(2, "0");
  return formatTime;
}
// Fuction to get weather information.
function allWeatherData(parameter) {
  document.getElementById("theChosenCity").innerHTML = parameter.name;
  document.getElementById("temperature").innerHTML =
    (parameter.main.temp - 273.15).toFixed(2) + " ℃";
  const weatherIcon =
    "https://openweathermap.org/img/w/" + parameter.weather[0].icon + ".png";
  document.getElementById("iconForWeatherType").innerHTML =
    '<img src = "' + weatherIcon + ' ">';
  const windSpeedMPH = (parameter.wind.speed * 2.23694).toFixed(2);
  document.getElementById("windSpeed").innerHTML =
    "Wind speed: " + windSpeedMPH + " ml/h";
  const cloudParcentage = parameter.clouds.all;
  document.getElementById("howCloudyItIs").innerHTML =
    "Cloudy: " + cloudParcentage + "%";
  document.getElementById("sunriseTime").innerHTML =
    "Sunrise: " + timestampToTime(parameter.sys.sunrise);
  document.getElementById("sunsetTime").innerHTML =
    "Sunset: " + timestampToTime(parameter.sys.sunset);
  const body = document.querySelector("body");
  document.getElementById("container").style.backgroundImage =
    "url('https://i.pinimg.com/originals/9e/0f/fd/9e0ffd65930d4bb80764d56b42f5b8a0.jpg')";

  (error) => console.log(error);
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  const city = localStorage.getItem("myCity");
  if (city !== "") {
    //console.log("City name" + city);
    (async function () {
      const weatherData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=a9a4924b301fedae29f7f402ae447166"
      );
      const weatherInfo = await weatherData.json();
      allWeatherData(weatherInfo);
    })();
  }
});
