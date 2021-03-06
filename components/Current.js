import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
// import Moment from 'moment-timezone'

export default class Current extends Component {
  appendZeroes (time) {
    return (time.toString().length === 1) ? '0' + time : time
  }
  convertToLocalTime (ts) {
    let date = new Date(ts * 1000)
    let hours = (date.getHours())
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return (this.appendZeroes(hours) + ' : ' + this.appendZeroes(minutes) + ' : ' + this.appendZeroes(seconds))
    // return Moment().tz(ts, city)
  }
  render() {
    return (
    <View style={styles.details}>
      <Text style={styles.bigText}>
        Windspeed: {this.props.screenProps.wind.speed} m/s
      </Text>
      <Text style={styles.bigText}>
        Pressure: {this.props.screenProps.main.pressure} hPa
      </Text>
      <Text style={styles.bigText}>
        Humidity: {this.props.screenProps.main.humidity} %
      </Text>
      <Text style={styles.bigText}>
        Sunrise: {this.convertToLocalTime(this.props.screenProps.sys.sunrise)}
      </Text>
      <Text style={styles.bigText}>
        Sunset: {this.convertToLocalTime(this.props.screenProps.sys.sunset)}
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  details: {
    // flex: 2.5,
    display: 'flex',
    flexDirection: 'column'
  },
  bigText: {
    // flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});