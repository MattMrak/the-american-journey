import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchFavoritedParks } from '../actions/favoritedParks';
import FavoritedParkCard from '../components/FavoritedParkCard';

class FavoritedParksContainer extends Component {

    state = {
        favoritedParks: []
    }

    componentDidMount() {
        this.props.fetchFavoritedParks()
    }

    render() {
        const favoritedParksList = this.props.favoritedParks.map(park => (
            < FavoritedParkCard
                key={park.id}
                id={park.id}
                fullName={park.fullName}
                description={park.description}
                contacts={park.contacts}
                entranceFees={park.entranceFees}
                operatingHours={park.operatingHours}
                addresses={park.addresses}
            />
        ))
        return (
            <div>
                <header className="App-header">
                    <div className="FavoritedParksList">
                        {favoritedParksList}
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

export default connect(mapStateToProps, { fetchFavoritedParks })(FavoritedParksContainer)