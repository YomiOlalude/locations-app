import React from 'react'

const City = (props) => {

    return (
        <div className="city" >
            <h4>{props.name}</h4>
            <p className="city-location" ><strong>Locations:</strong> {props.locations}</p>
            <p>Code: {props.code}</p>
            <p className="city-time-added" >{props.time_added}</p>
            <button className="btn-primary" onClick={props.deleteCity} >Delete</button>
        </div>
    )
}

export default City
