import React from 'react';
import WeatherIcons from 'react-weathericons';

export class WeatherTile extends React.Component {
  render() {

  	function getHourlyData(number, hourlyArray) {
  		return hourlyArray.data[number];
  	}

  	let contents = null;
	// get the current time and set what time this weather tile is for
	let currentDate = new Date();
  	if (this.props.hourly) {
	  	if (!this.props.children.currently) {
	  		contents = <p>Loading data...</p>;
	  	} else {
	  		let number = this.props.number;
			let time = (currentDate.getHours() + number) + ':' + currentDate.getMinutes();
	  		// loop through the hours
	  		let hourlyData = getHourlyData(number, this.props.children.hourly);
	  		let currentWeather = hourlyData.summary;
	  		let temperature = hourlyData.temperature;
	  		let weatherIcon = '';
	  		if (currentWeather === 'Mostly Cloudy') {
	  			weatherIcon = 'day-cloudy-high';
	  		} else if (currentWeather === 'Overcast') {
	  			weatherIcon = 'day-cloudy';
	  		} else if (currentWeather === 'Rain') {
	  			weatherIcon = 'sprinkle';
	  		}
	  		contents =
		  		<div>
		  			<p>Time: { time }</p>
		  			<WeatherIcons name={weatherIcon} size='2x' />
		  			<p>Weather:  { currentWeather }</p>
		  			<p>Temperature: { temperature }</p>
		  		</div>;
	  	}
  	} else {
	  	if (!this.props.children.currently) {
	  		contents = <p>Loading data...</p>;
	  	} else {
			let time = currentDate.getHours() + ':' + currentDate.getMinutes();
	  		let currentWeather = this.props.children.currently.summary;
	  		let temperature = this.props.children.currently.temperature;
	  		let weatherIcon = '';
	  		if (currentWeather === 'Mostly Cloudy') {
	  			weatherIcon = 'day-cloudy-high';
	  		} else if (currentWeather === 'Overcast') {
	  			weatherIcon = 'day-cloudy';
	  		} else if (currentWeather === 'Rain') {
	  			weatherIcon = 'sprinkle';
	  		}
	  		contents =
		  		<div>
		  			<p>Time: { time }</p>
		  			<WeatherIcons name={weatherIcon} size='2x' />
		  			<p>Weather:  { currentWeather }</p>
		  			<p>Temperature: { temperature }</p>
		  		</div>;
	  	}
	}

	return <div className="weather-tile">{ contents }</div>;
  }
}