import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';

// For each park, add a button to 
// favorite/mark_visited.

class AllParks extends Component {
    
    state = {
        allParks: []
    }
    
    render() {
        console.log("You are hitting here")
        const allParksNames = this.props.allParks.map(park => <h1>{park.full_name}</h1>)
        const allParksDescriptions = this.props.allParks.map(park => <p>{park.description}</p>)
        const allParksContacts = this.props.allParks.map(park => <p>{park.contacts}</p>)
        const allParksEntranceFees = this.props.allParks.map(park => <p>{park.entrance_fees}</p>)
        const allParksOperatingHours = this.props.allParks.map(park => <p>{park.operating_hours}</p>)
        const allParksAddresses = this.props.allParks.map(park => <p>{park.addresses}</p>)
        return (
            <div>
                <header className="App-header">
                    <div className="AllParksListDivTopLevel">
                        <div className="AllParksListDiv">
                            {allParksNames}
                            Description: {allParksDescriptions}
                            Contacts: {allParksContacts}
                            Entrance Fees: {allParksEntranceFees}
                            Operating Hours: {allParksOperatingHours}
                            Addresses: {allParksAddresses}
                        </div>
                    </div>
                </header>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (stateFromStore) => {
    return {
        allParks: stateFromStore.allParksReducer.allParks
    }
}

export default connect(mapStateToProps, { fetchAllParks })(AllParks)