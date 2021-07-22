import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchDeleteFavPark } from '../actions/deleteFavoritedButton';

class DeleteFavoritedButton extends Component {

    state = {
        favoritedParks: []
    }

    handleDelete = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchDeleteFavPark()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

// const mapStateToProps = (stateFromStore) => {
//     return {
//         favoritedParks: stateFromStore.favoritedParksReducer.favoritedParks
//     }
// }

export default connect(null, { fetchDeleteFavPark })(DeleteFavoritedButton)