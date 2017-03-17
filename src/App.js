import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WeatherTile extends React.Component {
  render() {
    return <div className="weather-tile">{this.props.children}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WeatherTile>1</WeatherTile>
        <WeatherTile>2</WeatherTile>
        <WeatherTile>3</WeatherTile>
      </div>
    );
  }
}

export default App;
