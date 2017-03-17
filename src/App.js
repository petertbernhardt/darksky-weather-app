import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class WeatherTile extends React.Component {
  render() {
    return <div className="weather-tile">{this.props.children}</div>;
  }
}

class WeatherNav extends React.Component {
  render() {
    return <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a>Weather App</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>;
  }
}

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
