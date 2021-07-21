import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchVisitedParks } from '../actions/visitedParks';
import VisitedParkCard from './VisitedParkCard';

class VisitedParks extends Component {

    state = {
        visitedParks: []
    }

    render() {
        const visitedParksList = this.props.visitedParks.map(park => (
            < VisitedParkCard
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
                    <div className="VisitedParksList">
                        {visitedParksList}
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

export default connect(mapStateToProps, { fetchVisitedParks })(VisitedParks)