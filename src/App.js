import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import {WeatherTile} from './components/weatherTile.js';
import {WeatherNav} from './components/weatherNav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: {} };
  }

  getWeatherData() {
    var data = require('./config.json');
    var url = 'https://api.darksky.net/forecast/' + data.apiKey + '/47.6062,-122.3321';
    return fetchJsonp(url)
      .then(function(response) {
        return response.json();
      });
  }

  componentDidMount() {
    let data;
    this.getWeatherData()
      .then((json) => {
        data = json;
        this.setState({
          weatherData: data
        });
        console.log(this.state.weatherData);
      });
  }

  render() {
    let hourlyTiles = [];
    for (let i = 1; i < 8; i++) {
      hourlyTiles.push(<WeatherTile hourly='true' number={i} key={i}>{this.state.weatherData}</WeatherTile>);
    }
    let dailyTiles = [];
    for (let i = 1; i < 8; i++) {
      dailyTiles.push(<WeatherTile daily='true' number={i} key={i}>{this.state.weatherData}</WeatherTile>);
    }

    return (
      <div className="App">
        <WeatherNav />
        <div>Today: <WeatherTile>{this.state.weatherData}</WeatherTile></div>
        <div>
          Hourly:
          {hourlyTiles}
        </div>
        <div>
          Daily:
          {dailyTiles}
        </div>
      </div>
    );
  }
}

export default App;
