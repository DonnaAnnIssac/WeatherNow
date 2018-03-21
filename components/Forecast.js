import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import Current from './Current'

weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default class Forecast extends Component {
  appendZeroes (time) {
    return (time.toString().length === 1) ? '0' + time : time
  }
  getDate () {
    let today = new Date()
    let day = weekdays[today.getDay()]
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    return (day + ', ' + this.appendZeroes(dd) + ' ' + this.appendZeroes(mm) + ' ' + this.appendZeroes(yyyy))
  }
  render () {
    return (
      <View style={styles.outputBox}>
        <View style={styles.dateBox}>
          <Text style={styles.dateInfo}>
            {this.getDate()} {this.props.forecast.name}, {this.props.forecast.sys.country}
          </Text>
        </View>
        <View style={styles.mainBox}>
          <Text style={styles.mainText}>
            {this.props.forecast.main.temp} °C
          </Text>
          <View style={styles.iconDesc}>
            <Image style={styles.weatherIcon} source={{uri: 'http://openweathermap.org/img/w/' + this.props.forecast.weather[0].icon + '.png'}} />
            <Text style={styles.iconText}>
              {this.props.forecast.weather[0].main}
            </Text>
          </View>
        </View>
        <Current
          speed={this.props.forecast.wind.speed}
          pressure={this.props.forecast.main.pressure}
          humidity={this.props.forecast.main.humidity}
          sunrise={this.props.forecast.sys.sunrise}
          sunset={this.props.forecast.sys.sunset} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outputBox: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 5
  },
  dateBox: {
    flex: 0.5,
    display: 'flex'
  },
  dateInfo: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  mainBox: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  mainText: {
    flex: 2,
    fontSize: 56,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  iconDesc: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  weatherIcon: {
    flex: 3,
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  iconText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
