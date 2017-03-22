import React from 'react';
import WeatherIcons from 'react-weathericons';

export class WeatherTile extends React.Component {
  render() {

  	let contents = null;
  	if (!this.props.children.currently) {
  		contents = <p>Loading data...</p>;
  	} else {
  		let name = '';
  		let currentWeather = this.props.children.currently.summary;
  		let temperature = this.props.children.currently.temperature;
  		let weatherIcon = '';
  		switch(currentWeather) {
  			case 'Mostly Cloudy':
  				weatherIcon = 'day-cloudy-high';
  			case 'Overcast':
  				weatherIcon = 'day-cloudy';
  		}
  		contents =
	  		<div>
	  			<WeatherIcons name={weatherIcon} size='2x' />
	  			<p>Weather:  { currentWeather }</p>
	  			<p>Temperature: { temperature }</p>
	  		</div>;
  	}

	return <div className="weather-tile">{ contents }</div>;
  }
}