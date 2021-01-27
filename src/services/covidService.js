import axios from 'axios';

let url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {

    if(country){
        url = "https://covid19.mathdro.id/api/countries/" + country
    }else{
        url = "https://covid19.mathdro.id/api"
    };

    try {
        const response = await axios.get(url);

        const neededData = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate,
        };

        return neededData;
        
    } catch (error) {
        console.log(error);
    }

};

export const fetchDailyData = async () => {

    try {
        const response = await axios.get(url + '/daily');

        const neededData = [];

        response.data.map( (dailyData) => {

            neededData.push( {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            } );
            
        } );

        return neededData;
        
    } catch (error) {
        console.log(error);
    };

};

export const fetchCountries = async () => {

    try {
        const response = await axios.get(url + '/countries');
        
        const countries = response.data.countries.map( country => country.name );

        return countries;
        
    } catch (error) {
        console.log(error);
    };

};

