'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

var EntryView = require('./EntryView');

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  countries: {
    fontSize: 18,
    color: '#656565',
    fontWeight: 'bold'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class CrisisResults extends Component {
  constructor(props) {
  super(props);
  var dataSource = new ListView.DataSource(
    {rowHasChanged: (id1, id2) => id1.ID !== r2.ID});
  this.state = {
    dataSource: dataSource.cloneWithRows(this.props.Entries)
  };
}

rowPressed(ID) {
  var entry = this.props.Entries.filter(prop => prop.ID === ID)[0];

  this.props.navigator.push({
    title: "Information",
    component: EntryView,
    passProps: {entry: entry }
  });
}

renderRow(rowData, sectionID, rowID) {
  var areas = Object.keys(rowData.CapArea)
  .map(key => (rowData.CapArea[key].CapAreaDesc))
  .join(', ');
  var backgroundColor = rowData.CapEvent === 'News' ? '#ffffff' : '#f499ac';

  return (
    <TouchableHighlight onPress={()=> this.rowPressed(rowData.ID)}
        underlayColor='#dddddd'>
        <View>
         <View style={styles.rowContainer} backgroundColor={backgroundColor}>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>{rowData.Title}</Text>
            <Text style={styles.countries}>{areas}</Text>
            <Text style={styles.title}>{rowData.Published.slice(0,10)}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );
}
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

module.exports = CrisisResults;
