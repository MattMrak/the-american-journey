import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchVisitedParks } from '../actions/visitedParks';
import VisitedParkCard from '../components/VisitedParkCard';

class VisitedParksContainer extends Component {

    state = {
        visitedParks: []
    }

    componentDidMount() {
        this.props.fetchVisitedParks()
    }

    render() {
        const visitedParksList = this.props.visitedParks.map(park => (
            < VisitedParkCard
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
        visitedParks: stateFromStore.visitedParksReducer.visitedParks
    }
}

export default connect(mapStateToProps, { fetchVisitedParks })(VisitedParksContainer)