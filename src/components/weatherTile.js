import React from 'react';
import WeatherIcons from 'react-weathericons';

export class WeatherTile extends React.Component {
	render() {

		function getHourlyData(number, hourlyArray) {
			return hourlyArray.data[number];
		}

		function getDailyData(number, dailyArray) {
			return dailyArray.data[number];
		}

		function getWeatherIcon(currentWeather, providedIcon) {
			if (currentWeather.toLowerCase().includes('cloudy') ||
			currentWeather.toLowerCase().includes('overcast') ||
			currentWeather.toLowerCase().includes('humid')) {
				return 'cloud';
			} else if (currentWeather.toLowerCase().includes('rain') ||
					currentWeather.toLowerCase().includes('drizzle')) {
				return 'sprinkle';
			} else if (currentWeather.toLowerCase().includes('clear') ||
					currentWeather.toLowerCase().includes('dry')) {
				if (providedIcon && providedIcon.toLowerCase().includes('night')) {
					return 'night-clear';
				} else {
					return 'day-sunny';
				}
			}
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
				weatherIcon = getWeatherIcon(currentWeather, hourlyData.icon);
				contents =
				<div>
					<p>Time: { time }</p>
					<WeatherIcons name={ weatherIcon } size='2x' />
					<p>Weather:  { currentWeather }</p>
					<p>Temperature: { temperature }</p>
				</div>;
			}
		} else if (this.props.daily) {
			if (!this.props.children.currently) {
				contents = <p>Loading data...</p>;
			} else {
				let number = this.props.number;
				let month = currentDate.getMonth() + 1;
				let day = currentDate.getDate() + number;
				// loop through the hours
				let dailyData = getDailyData(number, this.props.children.daily);
				let currentWeather = dailyData.summary;
				let temperatureMin = dailyData.temperatureMin;
				let temperatureMax = dailyData.temperatureMax;
				let weatherIcon = '';
				weatherIcon = getWeatherIcon(currentWeather);
				contents =
				<div>
					<p>{ month }/{ day }</p>
					<WeatherIcons name={ weatherIcon } size='2x' />
					<p>Weather:  { currentWeather }</p>
					<p>Temperature Min: { temperatureMin }</p>
					<p>Temperature Max: { temperatureMax }</p>
				</div>;
			}
		} else {
			if (!this.props.children.currently) {
				contents = <p>Loading data...</p>;
			} else {
				let month = currentDate.getMonth() + 1;
				let day = currentDate.getDate();
				let time = currentDate.getHours() + ':' + currentDate.getMinutes();
				let currentWeather = this.props.children.currently.summary;
				let temperature = this.props.children.currently.temperature;
				let weatherIcon = '';
				weatherIcon = getWeatherIcon(currentWeather);
				contents =
				<div>
					<p>{ month }/{ day }</p>
					<p>Time: { time }</p>
					<WeatherIcons name={ weatherIcon } size='2x' />
					<p>Weather:  { currentWeather }</p>
					<p>Temperature: { temperature }</p>
				</div>;
			}
		}

		return <div className="weather-tile">{ contents }</div>;
	}
}