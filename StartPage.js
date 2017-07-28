'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

//var SearchResults = require('./SearchResults');

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    marginBottom: 10,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    marginTop: 40
  }
});

class StartPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: false
  };
}


  render() {
    return(
    <View style={styles.container}>
      <Text style={styles.description}>Detta är en app som hämtar krisinformation</Text>
      <View style={styles.flowRight}>
      <TouchableHighlight style={styles.button}
        //onPress={this.onFecthDataPressed.bind(this)}
        underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Hämta data</Text>
        </TouchableHighlight>
        </View>
        <Image source={require('./Resources/logo.png')} style={styles.image} />
    </View>
  )};
}

module.exports = StartPage;
