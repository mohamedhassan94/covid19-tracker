import React, { useEffect, useState } from 'react';
import './countryPicker.css';
import { fetchCountries } from "../../services/covidService";


const CountryPicker = (props) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {

        const getCountries = async () => {
            setFetchedCountries( await fetchCountries() )
        };

        getCountries();

    }, [setFetchedCountries] );


    return (
        <div className="container my-4">
            <form className="text-center">
                <select onChange={ (e) => props.onCountrySelect(e.target.value) } 
                        className="w-50 border-top-0 select-country py-1" >
                    <option value="">Global</option>
                    { fetchedCountries.map( country => 
                        <option 
                        key={country} 
                        value={country}>
                            {country}
                        </option>
                    ) }
                </select>
            </form>
        </div>
    );
};

export default CountryPicker;