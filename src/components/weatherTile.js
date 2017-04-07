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

		function setUpWeatherTile(props, currentDate, isHourly, isDaily) {
			if (isHourly) {
				let number = props.number;
				let time = (currentDate.getHours() + number) + ':' + currentDate.getMinutes();
				// loop through the hours
				let hourlyData = getHourlyData(number, props.children.hourly);
				let currentWeather = hourlyData.summary;
				let temperature = hourlyData.temperature;
				let weatherIcon = '';
				weatherIcon = getWeatherIcon(currentWeather, hourlyData.icon);
				// eslint-disable-next-line
				contents =
				<div>
					<p>Time: { time }</p>
					<WeatherIcons name={ weatherIcon } size='2x' />
					<p>Weather:  { currentWeather }</p>
					<p>Temperature: { temperature }</p>
				</div>;
			} else if (isDaily) {
				let number = props.number;
				let month = currentDate.getMonth() + 1;
				let day = currentDate.getDate() + number;
				// loop through the hours
				let dailyData = getDailyData(number, props.children.daily);
				let currentWeather = dailyData.summary;
				let temperatureMin = dailyData.temperatureMin;
				let temperatureMax = dailyData.temperatureMax;
				let weatherIcon = '';
				weatherIcon = getWeatherIcon(currentWeather);
				// eslint-disable-next-line
				contents =
				<div>
					<p>{ month }/{ day }</p>
					<WeatherIcons name={ weatherIcon } size='2x' />
					<p>Weather:  { currentWeather }</p>
					<p>Temperature Min: { temperatureMin }</p>
					<p>Temperature Max: { temperatureMax }</p>
				</div>;
			} else {
				let month = currentDate.getMonth() + 1;
				let day = currentDate.getDate();
				let time = currentDate.getHours() + ':' + currentDate.getMinutes();
				let currentWeather = props.children.currently.summary;
				let temperature = props.children.currently.temperature;
				let weatherIcon = '';
				weatherIcon = getWeatherIcon(currentWeather);
				// eslint-disable-next-line
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

		let contents = null;
		// get the current time and set what time this weather tile is for
		let currentDate = new Date();
		if (this.props.hourly) {
			if (!this.props.children.currently) {
				contents = <p>Loading data...</p>;
			} else {
				setUpWeatherTile(this.props, currentDate, true, false);
			}
		} else if (this.props.daily) {
			if (!this.props.children.currently) {
				contents = <p>Loading data...</p>;
			} else {
				setUpWeatherTile(this.props, currentDate, false, true);
			}
		} else {
			if (!this.props.children.currently) {
				contents = <p>Loading data...</p>;
			} else {
				setUpWeatherTile(this.props, currentDate, false, false);
			}
		}

		return <div className="weather-tile">{ contents }</div>;
	}
}