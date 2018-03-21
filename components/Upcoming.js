import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default class Upcoming extends Component {
  render () {
    return (
      <View>
        <Text style={styles.text}> Ellow there, mate!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF'
  }
})