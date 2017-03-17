import React, { Component } from 'react';
import './App.css';
import {WeatherTile} from './components/weatherTile.js';
import {WeatherNav} from './components/weatherNav.js';

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
