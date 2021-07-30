import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchPostVisitedParks } from '../actions/visitedParks';

class VisitedButton extends Component {

    state = {
        visitedParks: []
    }
    
    handleVisited = (evt) => {
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
        this.props.fetchPostVisitedParks(park)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleVisited}>Visited</button>
            </div>
        );
    }
}

export default connect(null, { fetchPostVisitedParks })(VisitedButton)