import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import Current from './Current'
import {Tabs} from '../router/router'

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
        <View style={styles.mainBox}>
          <View style={styles.dateBox}>
            <Text style={styles.mainText}>
              {this.props.forecast.main.temp} °C
            </Text>
            <Text style={styles.dateInfo}>
              {this.getDate()} {this.props.forecast.name}, {this.props.forecast.sys.country}
            </Text>
          </View>
          <View style={styles.iconDesc}>
            <Image style={styles.weatherIcon} source={{uri: 'http://openweathermap.org/img/w/' + this.props.forecast.weather[0].icon + '.png'}} />
            <Text style={styles.iconText}>
              {this.props.forecast.weather[0].main}
            </Text>
          </View>
        </View>
        <Tabs screenProps={this.props.forecast} style={styles.tab}/>
        {/* <Current
          speed={this.props.forecast.wind.speed}
          pressure={this.props.forecast.main.pressure}
          humidity={this.props.forecast.main.humidity}
          sunrise={this.props.forecast.sys.sunrise}
          sunset={this.props.forecast.sys.sunset} /> */}
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
  mainBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'yellow'
  },
  dateBox: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 2,
    // borderColor: 'yellow'
  },
  mainText: {
    flex: 2,
    fontSize: 56,
    paddingTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    // borderWidth: 2,
    // borderColor: 'pink'
  },
  dateInfo: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    // borderWidth: 2,
    // borderColor: 'pink'
  },
  iconDesc: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'pink'
  },
  weatherIcon: {
    flex: 3,
    width: '100%',
    height: 70,
    // borderWidth: 2,
    // borderColor: 'pink'
  },
  iconText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    // borderWidth: 2,
    // borderColor: 'pink'
  },
  tab: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'yellow'
  }
})
