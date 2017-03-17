import React from 'react';

export class WeatherTile extends React.Component {
  render() {
	return <div className="weather-tile">
		{!this.props.children.currently &&
			"Loading data..."
	    }
		{this.props.children.currently &&
			"Weather: " + this.props.children.currently.summary +
			" Temperature: " + this.props.children.currently.temperature
	    }
	</div>;
  }
}