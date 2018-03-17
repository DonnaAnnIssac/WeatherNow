const fetch = require('node-fetch')
const apiKey = 'b8d2d2a1a21eaf4b911bf1cc6615f6e1'

let getWeather = (url, app) => {
  fetch(url)
  .then(res => res.json())
  .then(responseJSON => app.setState({
    forecast: {
      main: responseJSON.weather[0].main,
      description: responseJSON.weather[0].description,
      temp: responseJSON.main.temp,
      pressure: responseJSON.main.pressure,
      humidity: responseJSON.main.humidity,
      windspeed: responseJSON.wind.speed,
      sunrise: responseJSON.sys.sunrise,
      sunset: responseJSON.sys.sunset,
      city: responseJSON.name
    }
  }))
  .catch(error => console.log(error))
}

let getByCity = (city, app) => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey
  getWeather(url, app)
}

let getByZip = (zip, app) => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=' + apiKey
  getWeather(url, app)
}
module.exports = {getByCity, getByZip}
