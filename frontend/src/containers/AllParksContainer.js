import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';
import AllParkCard from '../components/AllParkCard';

class AllParksContainer extends Component {
    
    state = {
        allParks: []
    }

    componentDidMount() {
        this.props.fetchAllParks()
    }
    
    render() {
        
        const allParksList = this.props.allParks.length >0 && this.props.allParks[0].data.map(park => (
            < AllParkCard
                key={park.id}
                id={park.id}
                fullName={park.fullName}
                description={park.description}
                contacts={park.contacts.phoneNumbers[0].phoneNumber}
                entranceFees={park.entranceFees[0].cost}
                operatingHours={Object.values(park.operatingHours[0].description).reduce((acc, currentValue) => {
                    return (acc.concat("", currentValue))
                }, "")}
                addresses={Object.values(park.addresses[0]).reduce((acc, currentValue) => {
                    return (acc.concat(" ".split("").reverse().join(""), currentValue))
                }, "")}
            />
        ))
        return (
            <div>
                <header className="App-header">
                    <div className="AllParksList">
                        {allParksList}
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

export default connect(mapStateToProps, { fetchAllParks })(AllParksContainer)