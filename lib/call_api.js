const fetch = require('node-fetch')
const config = require('../config')

let getWeather = (url, app) => {
  fetch(url)
  .then(res => res.json())
  .then(responseJSON => app.setState({
    forecast: responseJSON
  }))
  .catch(error => console.log(error))
}

let getByCity = (city, app) => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + config.weather.apiKey
  getWeather(url, app)
}

let getByCoords = (coords, app) => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric&APPID=' + config.weather.apiKey
  getWeather(url, app)
}

module.exports = {getByCity, getByCoords}
