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
        forecast={this.state.forecast} />
      // return <ResultView />
    } else return null
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
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>
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
          <Text style={styles.welcomeText}>OR</Text>
          <View style={styles.locBtnDiv}>
            <Button
              onPress={() => this.getLocation()}
              title='Locate Me'
              style={styles.getLocBtn} />
          </View>
        </View>
        <View style={styles.mapContainer}>
            {this.displayMap()}
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
    height: '100%',
    width: '100%',
    margin: 0,
    backgroundColor: '#37474f',
  },
  inputContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    display: 'flex',
    marginTop: 10,
  },
  textInputContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    margin: 0
  },
  inputLabel: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  inputBox: {
    flex: 1,
    margin: 0,
    display: 'flex',
  },
  cityName: {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    color: '#FFFFFF'
  },
  welcomeText: {
    flex: 1,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#FFFFFF'
  },
  locBtnDiv: {
    flex: 2,
    display: 'flex',
    margin: 0,
    alignItems: 'center'
  },
  getLocBtn: {
    color: '#000051',
    flex: 1,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    flex: 1.5
  },
  resultView: {
    width: '100%',
    height: '100%',
    flex: 3
  }
})
