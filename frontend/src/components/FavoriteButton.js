import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchPostFavParks } from '../actions/favoriteButton';

class FavoriteButton extends Component {

    state = {
        favoritedParks: [],
    }
    
    handleFavorite = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchPostFavParks()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleFavorite}>Favorite</button>
            </div>
        );
    }
}

// const mapStateToProps = (stateFromStore) => {
//     return {
//         favoritedParks: stateFromStore.favoritedParksReducer.favoritedParks
//     }
// }

export default connect(null, { fetchPostFavParks })(FavoriteButton)