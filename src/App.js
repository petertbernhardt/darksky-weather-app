import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
import {WeatherTile} from './components/weatherTile.js';
import {WeatherNav} from './components/weatherNav.js';
import Geosuggest from 'react-geosuggest';

class App extends Component {

  callWeatherAPI() {
    var url = 'https://api.darksky.net/forecast/' + this.state.darkskyKey + '/' + this.state.latLng;
    return fetchJsonp(url)
      .then(function(response) {
        return response.json();
      });
  }

  processWeatherData() {
    let data;
    this.callWeatherAPI()
      .then((json) => {
        data = json;
        this.setState({
          weatherData: data
        });
      });
  }

  componentWillMount() {
    var data = require('./config.json');
    this.state = {
      weatherData: {},
      latLng: '47.6062,-122.3321',
      darkskyKey: data.darkskyKey,
      googleKey: data.googleKey
    };
  }

  componentDidMount() {
    this.processWeatherData();
  }

  onSuggestSelect = (suggest) => {
    let latLng = '' + suggest.location.lat + ',' + suggest.location.lng;
    this.setState({
      latLng: latLng
    });
    this.processWeatherData();
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
        <div className="location-container">
          <h3>Select a Location</h3>
          <Geosuggest onSuggestSelect={this.onSuggestSelect} />
          <pre>Lat Lng: { this.state.latLng }</pre>
        </div>
        <div className="today-container">
          Today: <WeatherTile>{this.state.weatherData}</WeatherTile>
        </div>
        Hourly:
        <div className="hourly-container">
          <div className="hourly-inner-container">{hourlyTiles}</div>
        </div>
        Daily:
        <div className="daily-container">
          <div className="daily-inner-container">{dailyTiles}</div>
        </div>
        <script src="https://maps.googleapis.com/maps/api/js?key={ this.state.googleKey }&libraries=places"></script>
      </div>
    );
  }
}

export default App;
