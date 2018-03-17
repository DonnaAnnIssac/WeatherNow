import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import {getByCity} from './lib/call_api'
import Forecast from './components/Forecast'

export default class WeatherNow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zip: null,
      forecast: {
        main: null,
        description: null,
        temp: null,
        pressure: null,
        humidity: null,
        windspeed: null,
        sunrise: null,
        sunset: null,
        city: null
      }
    }
  }
  handleInputChange (event) {
    let city = event.nativeEvent.text
    getByCity(city, this)
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
        </View>
        if (this.state.forecast.main !== null) {
          <Forecast {...this.state} />
        }
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
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    display: 'flex',
    marginLeft: 0,
    marginTop: 3,
    marginBottom: 10
  },
  welcomeText: {
    flex: 1,
    fontSize: 20,
    color: '#FFFFFF'
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
  }
})
