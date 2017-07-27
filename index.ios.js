/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var React = require('react');
var ReactNative = require('react-native');
var StartPage = require('./StartPage');


var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class KrisinformationApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Krisinformation',
          component: StartPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('Krisinformation', () => KrisinformationApp);
