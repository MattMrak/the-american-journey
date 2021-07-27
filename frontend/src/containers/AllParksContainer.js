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
        const allParksList = this.props.allParks.map(park => (
            < AllParkCard
                key={park.data[0].id}
                id={park.data[0].id}
                fullName={park.data[0].fullName}
                description={park.data[0].description}
                contacts={park.data[0].contacts.phoneNumbers[0].phoneNumber}
                entranceFees={park.data[0].entranceFees[0].cost}
                operatingHours={park.data[0].operatingHours[0].standardHours.wednesday}
                addresses={park.data[0].addresses[0].line1}
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