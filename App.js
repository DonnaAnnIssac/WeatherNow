import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'
import {getByCity, getByCoords} from './lib/call_api'
import Forecast from './components/Forecast'
import MyMap from './components/MyMap'

export default class WeatherNow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      forecast: null,
      latitude: null,
      longitude: null,
      error: null
    }
  }
  handleInputChange (event) {
    let city = event.nativeEvent.text
    getByCity(city, this)
  }
  displayView () {
    if (this.state.forecast) {
      return <Forecast
        main={this.state.forecast.weather[0].main}
        description={this.state.forecast.weather[0].description}
        temp={this.state.forecast.main.temp}
        windspeed={this.state.forecast.wind.speed}
        pressure={this.state.forecast.main.pressure}
        humidity={this.state.forecast.main.humidity}
        sunrise={this.state.forecast.sys.sunrise}
        sunset={this.state.forecast.sys.sunset}
        city={this.state.forecast.name}
        icon={this.state.forecast.weather[0].icon} />
    } else return <Text style={styles.cityName}>Nothing to display yet</Text>
  }
  getLocation () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
        getByCoords(position.coords, this)
      },
      (error) => this.setState({ error: error.message })
    )
  }
  displayMap () {
    if (this.state.latitude !== null) {
      return <MyMap latitude={this.state.latitude} longitude={this.state.longitude} />
    } else return null
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.zipContainer}>
          <Text style={styles.welcomeText}>
            Where are you now?
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.cityName}
              onSubmitEditing={(event) => this.handleInputChange(event)}
              placeholderTextColor='#FFFFFF'
              placeholder='Enter city here' />
          </View>
          <Text style={styles.welcomeText}>OR</Text>
          <View style={styles.locBtnDiv}>
            <Button
              onPress={() => this.getLocation()}
              title='Locate Me'
              style={styles.getLocBtn} />
          </View>
          <View style={styles.mapContainer}>
            {this.displayMap()}
          </View>
        </View>
        <View style={styles.resultView}>
          {this.displayView()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    height: '100%',
    width: '100%',
    backgroundColor: '#000051'
  },
  zipContainer: {
    flex: 1,
    // borderBottomColor: '#DDDDDD',
    // borderBottomWidth: 1,
    display: 'flex',
    marginLeft: 0,
    marginTop: 3,
    marginBottom: 10
  },
  welcomeText: {
    flex: 1,
    // fontSize: 20,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  inputBox: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    flex: 1,
    width: '60%',
    fontSize: 16,
    color: '#FFFFFF'
  },
  resultView: {
    flex: 2
  },
  getLocBtn: {
    color: '#000051',
    flex: 1
  },
  locBtnDiv: {
    flex: 1
  },
  mapContainer: {
    flex: 1
  }
})
