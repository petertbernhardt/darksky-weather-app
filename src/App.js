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
    return fetchJsonp('https://api.darksky.net/forecast/61df4ca5d6853174a5cb712cc3ef8fb4/47.6062,-122.3321')
      .then(function(response) {
        return response.json();
      });
  }

  componentDidMount() {
    var data;
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
    return (
      <div className="App">
        <WeatherNav />
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
        <WeatherTile>{this.state.weatherData}</WeatherTile>
      </div>
    );
  }
}

export default App;
