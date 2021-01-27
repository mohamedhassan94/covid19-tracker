import React, {useState, useEffect} from 'react';

import {fetchDailyData} from './../../services/covidService';
import {Line, Bar} from 'react-chartjs-2';


import './chart.css';

const Chart = (props) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            setDailyData( await fetchDailyData() )
        };

        fetchData();

    }, [] );
    

    const lineChart = dailyData.length ? (
        <Line data={ {
            labels: dailyData.map( ({date}) => date ),
            datasets: [
                {
                    data: dailyData.map( ({confirmed}) => confirmed ),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    fill: true
                },
                {
                    data: dailyData.map( ({deaths}) => deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    fill: true
                },
            ]
            } }
        />
    ) : null;

    const barChart = props.data.confirmed ? (
        <Bar 
            data={ {
                labels: ['Infected', 'Recovered', 'Deaths'], 
                datasets: [ 
                    {
                        data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    }
                    ],
                } }
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state is ${props.country}`}
            }}
        />
    ) : null;


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-9 m-auto">
                    { props.country ? barChart : lineChart }
                </div>
            </div>
        </div>
    );
};

export default Chart;