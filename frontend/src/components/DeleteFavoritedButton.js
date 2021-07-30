import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchDeleteFavPark } from '../actions/deleteFavoritedButton';

class DeleteFavoritedButton extends Component {

    state = {
        favoritedParks: []
    }

    handleDelete = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchDeleteFavPark(this.props.id)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default connect(null, { fetchDeleteFavPark })(DeleteFavoritedButton)