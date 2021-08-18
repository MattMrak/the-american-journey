import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';
import AllParkCard from '../components/AllParkCard';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

class AllParksContainer extends Component {
    componentDidMount() {
        this.props.fetchAllParks()
    }
    render() {
        const allParksList = this.props.allParks.map(park => (
            < AllParkCard
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
                    <div className="AllParksList">
                    <Switch>
                        <Route exact path="/allparks">
                            {allParksList}
                        </Route>
                        <Route path="/allparks/:id" component={(routeInfo) => {
                            const paramsId = parseInt(routeInfo.match.params.id)
                            const foundAllPark = this.props.allParks.find(park => park.id === paramsId)
                            return <AllParkCard 
                            key={foundAllPark.id}
                            id={foundAllPark.id}
                            fullName={foundAllPark.fullName}
                            description={foundAllPark.description}
                            contacts={foundAllPark.contacts}
                            entranceFees={foundAllPark.entranceFees}
                            operatingHours={foundAllPark.operatingHours}
                            addresses={foundAllPark.addresses}
                            /> }}>
                        </Route>
                    </Switch>
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

export default withRouter(connect(mapStateToProps, { fetchAllParks })(AllParksContainer));