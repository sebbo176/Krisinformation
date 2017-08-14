'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

//maps api key
//AIzaSyCiUTMwpgNsurdax8r8eLqvVp09ptJkoyg

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
  secondTitle: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
    var areas = Object.keys(entry.CapArea)
    .map(key => (entry.CapArea[key].CapAreaDesc))
    .join(', ');

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{entry.Title}</Text>
          <Text style={styles.secondTitle}>{entry.Published.slice(0,10)}</Text>
          <Text style={styles.secondTitle}>{areas}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{entry.Summary}</Text>
        <View style={styles.separator}/>
      </View>
    );
  }
}

module.exports = EntryView;
