/**
 * Created by deepaksisodiya on 05/07/16.
 */


import React, { Component } from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class Button extends Component {

  static propTypes = {
    onPress: React.PropTypes.func,
    label: React.PropTypes.string
  };

  render() {
    const {label, onPress} = this.props;
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={onPress} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: "white"
  }
});
