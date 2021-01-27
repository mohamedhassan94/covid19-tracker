import React from 'react';

import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import './cards.css';


const Cards = (props) => {

    if(!props.data.confirmed){
        return 'Loading...';
    }

    return (

        <div className="container">

            <div className="row justify-content-center my-3">

                <Card className="col-md-3 p-4 m-4 infected">
                    <Card.Subtitle  className="text-muted font-weight-bolder mb-2">
                        Infected
                    </Card.Subtitle>
                    <Card.Text className="font-weight-bolder mb-2">
                        <CountUp 
                        start={0} 
                        end={props.data.confirmed.value} 
                        duration={2.5} 
                        separator=","
                        />
                    </Card.Text>
                    <Card.Subtitle  className="text-muted">
                        { new Date(props.data.lastUpdate).toDateString() }
                    </Card.Subtitle>
                    <Card.Text className="my-2" style={ {fontWeight: 600} }>
                        Number of active cases of COVID-19
                    </Card.Text>
                </Card>

                <Card className="col-md-3 p-4 m-4 recovered">
                    <Card.Subtitle  className="text-muted font-weight-bolder mb-2">
                        Recovered
                    </Card.Subtitle>
                    <Card.Text className="font-weight-bolder mb-2">
                        <CountUp 
                        start={0} 
                        end={props.data.recovered.value} 
                        duration={2.5} 
                        separator=","
                        />
                    </Card.Text>
                    <Card.Subtitle  className="text-muted">
                        { new Date(props.data.lastUpdate).toDateString() }
                    </Card.Subtitle>
                    <Card.Text className="my-2" style={ {fontWeight: 600} }>
                        Number of recoveries from COVID-19
                    </Card.Text>
                </Card>

                <Card className="col-md-3 p-4 m-4 deaths">
                    <Card.Subtitle  className="text-muted font-weight-bolder mb-2">
                        Deaths
                    </Card.Subtitle>
                    <Card.Text className="font-weight-bolder mb-2">
                        <CountUp 
                        start={0} 
                        end={props.data.deaths.value} 
                        duration={2.5} 
                        separator=","
                        />
                    </Card.Text>
                    <Card.Subtitle  className="text-muted">
                        { new Date(props.data.lastUpdate).toDateString() }
                    </Card.Subtitle>
                    <Card.Text className="my-2" style={ {fontWeight: 600} }>
                        Number of deaths caused by COVID-19
                    </Card.Text>
                </Card>
            
            </div>
        </div>

    );
};

export default Cards;