'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class EntryView extends Component {

  render() {
    var entry = this.props.entry;

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{entry.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{entry.Summary}</Text>
      </View>
    );
  }
}

module.exports = EntryView;
