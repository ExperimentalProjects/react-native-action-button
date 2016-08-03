/**
 * Created by abhisheksingh on 28/07/16.
 */


import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Button from './Button';

export default class FloatingButton extends Component {

  constructor(props) {
    super(props);
  };

  _buttonClick = ()=>{

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Basic Example
        </Text>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
           <Button onPress={this._buttonClick} label="One" />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Button onPress={this._buttonClick} label="Two" />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Button onPress={this._buttonClick} label="Three" />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
});
