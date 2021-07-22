import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchDeleteVisitedPark, fetchDeleteFavPark } from '../actions/deleteButton';

class DeleteButton extends Component {

    state = {
        visitedParks: [],
        favoritedParks: []
    }
    
    handleDelete = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchDeleteVisitedPark()
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
//         visitedParks: stateFromStore.visitedParksReducer.visitedParks
//         favoritedParks: stateFromStore.favoritedParksReducer.favoritedParks
//     }
// }

export default connect(null, { fetchDeleteVisitedPark, fetchDeleteFavPark })(DeleteButton)