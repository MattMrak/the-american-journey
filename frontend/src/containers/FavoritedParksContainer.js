import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import {connect} from "react-redux"
import { fetchFavoritedParks } from '../actions/favoritedParks';
import FavoritedParkCard from '../components/FavoritedParkCard';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

class FavoritedParksContainer extends Component {
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
                        <Switch>
                            <Route exact path="/favoritedparks">
                                {favoritedParksList}
                            </Route>
                            <Route path="/favoritedparks/:id" component={(routeInfo) => {
                                const paramsId = parseInt(routeInfo.match.params.id)
                                const foundFavoritedPark = this.props.favoritedParks.find(park => park.id === paramsId)
                                return <FavoritedParkCard 
                                key={foundFavoritedPark.id}
                                id={foundFavoritedPark.id}
                                fullName={foundFavoritedPark.fullName}
                                description={foundFavoritedPark.description}
                                contacts={foundFavoritedPark.contacts}
                                entranceFees={foundFavoritedPark.entranceFees}
                                operatingHours={foundFavoritedPark.operatingHours}
                                addresses={foundFavoritedPark.addresses}
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
        favoritedParks: stateFromStore.favoritedParksReducer.favoritedParks
    }
}

export default withRouter(connect(mapStateToProps, { fetchFavoritedParks })(FavoritedParksContainer))