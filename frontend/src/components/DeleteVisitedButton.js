import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchDeleteVisitedPark } from '../actions/deleteVisitedButton';

class DeleteVisitedButton extends Component {

    state = {
        visitedParks: []
    }

    handleDelete = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchDeleteVisitedPark(this.props.id)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default connect(null, { fetchDeleteVisitedPark })(DeleteVisitedButton)