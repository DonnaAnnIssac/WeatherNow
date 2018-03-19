import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
// import Moment from 'moment-timezone'

export default class extends Component {
  appendZeroes (time) {
    return (time.toString().length === 1) ? '0' + time : time
  }
  convertToLocalTime (ts, city) {
    let date = new Date(ts * 1000)
    let hours = (date.getHours())
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return (this.appendZeroes(hours) + ' : ' + this.appendZeroes(minutes) + ' : ' + this.appendZeroes(seconds))
    // return Moment().tz(ts, city)
  }
  render () {
    return (
      <View style={styles.outputBox}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Image style={styles.weatherIcon} source={{uri: 'http://openweathermap.org/img/w/' + this.props.icon + '.png'}} />
        <Text style={styles.bigText}>
          {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          Temperature: {this.props.temp} K
        </Text>
        <Text style={styles.bigText}>
          Windspeed: {this.props.windspeed} m/s
        </Text>
        <Text style={styles.bigText}>
          Pressure: {this.props.pressure} hPa
        </Text>
        <Text style={styles.bigText}>
          Humidity: {this.props.humidity} %
        </Text>
        <Text style={styles.mainText}>
          {this.convertToLocalTime(this.props.sunrise, this.props.city)}
        </Text>
        <Text style={styles.mainText}>
          {this.convertToLocalTime(this.props.sunset, this.props.city)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outputBox: {
    flex: 3,
    display: 'flex',
    marginTop: 20,
    marginBottom: 10
  },
  bigText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  weatherIcon: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  }
})
