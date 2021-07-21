import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchFavoritedParks } from '../actions/favoritedParks';

class FavoritedParks extends Component {

    state = {
        favoritedParks: []
    }

    render() {
        const favoritedParksNames = this.props.favoritedParks.map(park => <h1>{park.fullName}</h1>)
        const favoritedParksDescriptions = this.props.favoritedParks.map(park => <p>{park.description}</p>)
        const favoritedParksContacts = this.props.favoritedParks.map(park => <p>{park.contacts}</p>)
        const favoritedParksEntranceFees = this.props.favoritedParks.map(park => <p>{park.entranceFees}</p>)
        const favoritedParksOperatingHours = this.props.favoritedParks.map(park => <p>{park.operatingHours}</p>)
        const favoritedParksAddresses = this.props.favoritedParks.map(park => <p>{park.addresses}</p>)
        return (
            <div>
                <header className="App-header">
                    <div className="FavoritedParksListDivTopLevel">
                        <div className="FavoritedParksListDiv">
                            {favoritedParksNames}
                            Description: {favoritedParksDescriptions}
                            Contacts: {favoritedParksContacts}
                            Entrance Fees: {favoritedParksEntranceFees}
                            Operating Hours: {favoritedParksOperatingHours}
                            Addresses: {favoritedParksAddresses}
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
        favoritedParks: stateFromStore.favoritedParksReducer.favoritedParks
    }
}

export default connect(mapStateToProps, { fetchFavoritedParks })(FavoritedParks)