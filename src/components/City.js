import React from 'react'
import { Link } from 'react-router-dom';
import { FaCity } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";


const City = (props) => {

    return (
        <div className="city" >
            <BsBuilding className="building" />
            <Link to={`/cities/${props.slug}`} className="header-link" >
                <h4>{props.name}</h4>
            </Link>
            <p className="city-location" ><strong>Locations:</strong> {props.locations}</p>
            <p>Code: {props.code}</p>
            <p className="city-time-added" >{props.time_added}</p>
            <button className="btn-primary" onClick={props.deleteCity} >Delete</button>
        </div>
    )
}

export default City
