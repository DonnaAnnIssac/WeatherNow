import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
const config = require('../config')

export default class extends Component {
  render () {
    return (
      <View style={styles.map}>
        <Image style={styles.mapImage} source={{uri: 'https://image.maps.cit.api.here.com/mia/1.6/mapview?c=' + this.props.latitude + '%2C' + this.props.longitude + '&app_id=' + config.map.appID + '&app_code=' + config.map.appCode}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    display: 'flex',
    flex: 1
  },
  mapImage: {
    width: 50,
    height: 70,
    alignSelf: 'center'
  }
})
