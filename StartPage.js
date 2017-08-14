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

var CrisisResults = require('./CrisisResults');

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  status: {
    margin: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
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
    marginTop: 40,
    marginBottom: 20
  },
  alertStatusContainer: {
    backgroundColor: '#f499ac',
    marginBottom: 20,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    borderWidth: 1
  },
  newsStatusContainer: {
    backgroundColor: '#99f4b4',
    marginBottom: 20,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    borderWidth: 1
  }
});

var statusColor = '';
const query = 'https://api.krisinformation.se/v1/feed';

class StartPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: false,
    message: '',
    statusText: 'Inga larm rapporterade idag'
  };

  fetch(query)
  .then(response => response.json())
  .then(json => this._handleStartupResponse(json.Entries));
}


onFecthDataPressed() {
  this.setState({ isLoading: true});
  fetch(query)
  .then(response => response.json())
  .then(json => this._handleResponse(json.Entries))
  .catch(error =>
  this.setState({
    isLoading : false,
    message: 'Något gick dåligt vid hämtning av data ' + error
  }));
}

_handleResponse(Entries) {
  if(useSampleData()) {
    Entries.push(addSampleData());
  }

  this.setState({ isLoading: false , message: ''});
  if(Entries.length > 0) {
    this.props.navigator.push({
      title: 'Data från krisinformation.se',
      component: CrisisResults,
      passProps: {Entries: Entries}
    });
  } else {
    this.setState({ message: 'Badness 2k'});
  }
}



_handleStartupResponse(Entries) {
  if(useSampleData()) {
    Entries.push(addSampleData());
  }
  var today = new Date().toJSON().slice(0,10);
  var index = Entries.map(function(e){return e.CapEvent + e.Published.slice(0,10)}).indexOf('Alert' + today);

  if(index >= 0) {
    this.setState({statusColor: styles.alertStatusContainer, statusText: 'Pågående larm idag!'});
  } else {
    this.setState({statusColor: styles.newsStatusContainer});
  }
}

  render() {
    var spinner = this.state.isLoading ? ( <ActivityIndicator size='large' />) : (<View/>);

    return(
    <View style={styles.container}>
      <Text style={styles.description}>Hör du WMA sirener?</Text>
      <View style={this.state.statusColor}>
        <Text style={styles.status}>{this.state.statusText}</Text>
      </View>
      <View style={styles.flowRight}>
      <TouchableHighlight style={styles.button}
        onPress={this.onFecthDataPressed.bind(this)}
        underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Hämta all information</Text>
        </TouchableHighlight>
        </View>
        <Image source={require('./Resources/logo.png')} style={styles.image} />
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
    </View>
  )};
}

function useSampleData() {
  return true;
}

function addSampleData() {
 return (
       {
       "ID": "http://api.krisinformation.se/v1/capmessage/1231?format=xml",
       "Updated": "2017-07-21T08:08:14+02:00",
       "Published": "2017-08-14T07:21:32+02:00",
       "CapEvent": "Alert",
       "Author": {
           "Name": "https://www.krisinformation.se/"
       },
       "Title": "SOSSARNA kommer!",
       "Link": {
           "Id": null,
           "LinkName": null,
           "LinkUrl": "http://api.krisinformation.se/v1/capmessage/9982?format=xml"
       },
       "Summary": "Med anledning av tekniska problem med notiserna i vår mobilapp för krisinformation har vi nu valt att stänga av funktionen som trycker ut notiser till användarna, den så kallade pushfunktionen.",
       "CapArea": [
           {
               "CapAreaDesc": "Sverige",
               "Coordinate": "16.596265846848,62.8114849680804 0"
           }
       ]
   }
 );
}

module.exports = StartPage;
