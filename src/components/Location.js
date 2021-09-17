import React from 'react';

const Location = (props) => {

    return (
        <div className="location" >
            <h4 className="location-name" >{props.name}</h4>
            <p className="location-rent"> €{props.rent}</p>
            {/* <p className="location-phone">{props.phone}</p> */}
            {/* <p className="location-email">{props.email}</p> */}
            {/* <p className="location-coordinates">{props.coordinates}</p> */}
            {/* <p className="location-street-number">{props.street_number}</p> */}
            {/* <p className="location-street-name">{props.street_name}</p> */}
            {/* <p className="location-postal-code">{props.postal_code}</p> */}
            <p className="location-status">{props.status}</p>
            {/* <p className="location-time">{props.time_added}</p> */}
            <p className="location-city">City: {props.city}</p>
            <button className="btn-primary" onClick={props.deleteLocation} >Delete</button>
        </div>
    )}

export default Location