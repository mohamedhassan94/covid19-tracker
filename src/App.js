import './App.css';
import React, { Component } from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';

import covidImage from './images/covid-19.png';

import {fetchData} from './services/covidService'


class App extends Component {

  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState( { data: fetchedData } );
  }

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    this.setState( { data: countryData, country: country } );
  }

  render() { 

    const { data, country } = this.state;

    

    return (
      <div >
        <div className="text-center px-5 mt-2">
          <img src={covidImage} className="img-fluid" alt="Covid-19" />
        </div>
        <Cards data={data} />
        <CountryPicker onCountrySelect={this.handleCountryChange} />
        <Chart  data={data}  country={country} />
      </div>
    );
  }

}

export default App;

