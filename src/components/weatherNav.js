import React from 'react';
import { Navbar } from 'react-bootstrap';

export class WeatherNav extends React.Component {
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