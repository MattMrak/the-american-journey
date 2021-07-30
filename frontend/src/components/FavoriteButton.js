import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchPostFavParks } from '../actions/favoriteButton';

class FavoriteButton extends Component {

    state = {
        favoritedParks: []
    }
    
    handleFavorite = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.id]: evt.target.id
        })
        const park = {
            fullName: this.props.fullName,
            description: this.props.description,
            contacts: this.props.contacts,
            entranceFees: this.props.entranceFees,
            operatingHours: this.props.operatingHours,
            addresses: this.props.addresses
        }
        this.props.fetchPostFavParks(park)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleFavorite} >Favorite</button>
            </div>
        );
    }
}

export default connect(null, { fetchPostFavParks })(FavoriteButton)