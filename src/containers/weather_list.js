import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    // <td>{name}</td>

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="green" units="C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }
  render(){
    return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th width='10%'>City</th>
          <th width='20%'>Temperature (C)</th>
          <th width='20%'>Pressure (hPa)</th>
          <th width='20%'>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
    )
  }
}

function mapStateToProps({weather}){
  return { weather }; //weather:weather
}

export default connect(mapStateToProps)(WeatherList);
