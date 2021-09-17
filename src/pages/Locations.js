import React, { Component } from 'react';
import dataLocations from "../dataLocations";
import Location from '../components/Location';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            filteredLocations: [],
            name: "All",
            names: [],
            rent: 0,
            email: "All",
            emails: [],
            phone: "",
            coordinates: "",
            street_number: "",
            street_name: "",
            postal_code: "",
            available: false,
            time_added: "",
            city: 0,
            city_ids: []
        }
    }

    componentDidMount() {
        let locations = dataLocations

        this.setState({
            locations,
            filteredLocations: locations,
        })
    }

    filterLocations() {
        let {
            locations,
            filteredLocations,
            name,
            email,
            city,
        } = this.state

        let tempLocations = [...filteredLocations]
        city = parseInt(city)


        // filter by name 
        if (name !== "All") {
            tempLocations = tempLocations.filter(location => location.name === name)
        } 

        // filter by email 
        if (email !== "All") {
            tempLocations = tempLocations.filter(location => location.email === email)
        } 

        // filter by city 
        if (city !== 0) {
            tempLocations = tempLocations.filter(location => location.city === city)
        }

        if (isNaN(city)) {
            tempLocations = locations
        }

        this.setState({
            locations: tempLocations,
        })
    }

     handleChange = (event)  => {
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        }, this.filterLocations)
    }

    deleteLocation = (locationRemove) => {
        this.setState({locations: this.state.locations.filter(location => location !== locationRemove)})
    }

    render() {

        let names = [...new Set(this.state.filteredLocations.map(filteredLocation => filteredLocation.name))]
        names = ["All", ...names];
        names = names.map((name, index) => {
        return (
        <option value={name} key={index}>
            {name}
        </option>
         )
        })
        
        let emails = [...new Set(this.state.filteredLocations.map(filteredLocation => filteredLocation.email))]
        emails = ["All", ...emails];
        emails = emails.map((email, index) => {
        return (
        <option value={email} key={index}>
            {email}
        </option>
         )
        })
        
        return (
            
            <section>
                <h1 className="title" >Locations</h1>
                <div className="filter-container" >
                    <div className="form-control-container">
                        <label htmlFor="name">
                            Name:
                        </label>
                        <select name="name" id="genre" value={this.props.name}
                            className="form-control" onChange={this.handleChange}>
                            {names}
                        </select>
                    </div>
                    
                    <div className="form-control-container">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <select name="email" id="email" value={this.props.email}
                            className="form-control" onChange={this.handleChange}>
                            {emails}
                        </select>
                    </div>
                    
                    <div className="form-control-container">
                        <label htmlFor="city">
                            City ID:
                        </label>
                        <input name="city" id="city" value={this.props.city}
                            className="form-control" onChange={this.handleChange} defaultValue={0}>
                        </input>
                     </div>
                </div>

                <div className="locations" >
                    {this.state.locations.map(location => {
                        return <Location
                            key={location.id}
                            name={location.name}
                            rent={location.rent}
                            email={location.email}
                            phone={location.phone}
                            coordinates={location.coordinates}
                            street_number={location.street_number}
                            street_name={location.street_name}
                            postal_code={location.postal_code}
                            status={location.status}
                            time_added={location.time_added}
                            city={location.city}
                            deleteLocation={() => this.deleteLocation(location)}
                            />
                    })}
                </div>
            </section>
        )
    }
}
