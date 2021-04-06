import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
    return (
        <div className="driversCard">
            <img src={props.img} alt='Drivers pic'/>
            <div>
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;