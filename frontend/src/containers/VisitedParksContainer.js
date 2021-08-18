import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchVisitedParks } from '../actions/visitedParks';
import VisitedParkCard from '../components/VisitedParkCard';
import { withRouter } from "react-router";
import { BrowserRouter as Switch, Route } from 'react-router-dom';

class VisitedParksContainer extends Component {
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
                        <Switch>
                            <Route exact path="/visitedparks">
                                {visitedParksList}
                            </Route>
                            <Route path="/visitedparks/:id" component={(routeInfo) => {
                                const paramsId = parseInt(routeInfo.match.params.id)
                                const foundVisitedPark = this.props.visitedParks.find(park => park.id === paramsId)
                                return <VisitedParkCard 
                                key={foundVisitedPark.id}
                                id={foundVisitedPark.id}
                                fullName={foundVisitedPark.fullName}
                                description={foundVisitedPark.description}
                                contacts={foundVisitedPark.contacts}
                                entranceFees={foundVisitedPark.entranceFees}
                                operatingHours={foundVisitedPark.operatingHours}
                                addresses={foundVisitedPark.addresses}
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
        visitedParks: stateFromStore.visitedParksReducer.visitedParks
    }
}

export default withRouter(connect(mapStateToProps, { fetchVisitedParks })(VisitedParksContainer));