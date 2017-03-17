import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import {WeatherTile} from './components/weatherTile.js';
import {WeatherNav} from './components/weatherNav.js';

fetchJsonp('https://api.darksky.net/forecast/61df4ca5d6853174a5cb712cc3ef8fb4/47.6062,-122.3321')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherNav />
        <WeatherTile>1</WeatherTile>
        <WeatherTile>2</WeatherTile>
        <WeatherTile>3</WeatherTile>
      </div>
    );
  }
}

export default App;
