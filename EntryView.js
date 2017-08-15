'use strict';

import React, { Component } from 'react'
import MapView from 'react-native-maps'
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
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
    margin: 0,
    color: '#656565'
  },
  MapContainer: {
  position: 'absolute',
  top: 355,
  left: 0,
  right: 0,
  bottom: 0,
  height: 315,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollView: {
  marginTop:0,
  height:227,
  alignContent:'flex-start'
  }
});

class EntryView extends Component {

  render() {
    var entry = this.props.entry;
    var areas = Object.keys(entry.CapArea)
    .map(key => (entry.CapArea[key].CapAreaDesc))
    .join(', ');

    var longitude = parseFloat(entry.CapArea[0].Coordinate.split(',')[0]);
    var latitude = parseFloat(entry.CapArea[0].Coordinate.split(',')[1].split(' ')[0]);

    console.log('longitude=' + longitude);
    console.log('lat=' + latitude);
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{entry.Title}</Text>
          <Text style={styles.secondTitle}>{entry.Published.slice(0,10)}</Text>
          <Text style={styles.secondTitle}>{areas}</Text>
          <View style={styles.separator}/>
        </View>
        <ScrollView style={styles.scrollView}
          contentInset={{top:0}}
          automaticallyAdjustContentInsets={false}>
        <Text style={styles.description}>{entry.Summary}</Text>
        </ScrollView>
        <View style={styles.MapContainer}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      </View>
    );
  }
}

module.exports = EntryView;
