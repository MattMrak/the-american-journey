import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';
import FavoriteButton from './FavoriteButton';

// For each park, add a button to 
// favorite/mark_visited.

class AllParks extends Component {
    
    state = {
        allParks: []
    }
    
    render() {
        const allParksNames = this.props.allParks.map(park => <h1>{park.data[0].fullName}</h1>)
        const allParksDescriptions = this.props.allParks.map(park => <p>{park.data[0].description}</p>)
        const allParksContacts = this.props.allParks.map(park => <p>{park.data[0].contacts.phoneNumbers[0].phoneNumber}</p>)
        const allParksEntranceFees = this.props.allParks.map(park => <p>{park.data[0].entranceFees[0].cost}</p>)
        const allParksOperatingHours = this.props.allParks.map(park => <p>{park.data[0].operatingHours[0].standardHours.wednesday}</p>)
        const allParksAddresses = this.props.allParks.map(park => <p>{park.data[0].addresses[0].line1}</p>)
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
                            <FavoriteButton />
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