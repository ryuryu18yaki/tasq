import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    footer: {
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'blue',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      },
})