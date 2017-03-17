import React from 'react';

export class WeatherTile extends React.Component {
  render() {
    return <div className="weather-tile">{this.props.children}</div>;
  }
}