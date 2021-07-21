import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux"
import { fetchPostVisitedParks } from '../actions/visitedButton';

class VisitedButton extends Component {

    state = {
        visitedParks: []
    }
    
    handleVisited = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchPostVisitedParks()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleVisited}>Visited</button>
            </div>
        );
    }
}

// const mapStateToProps = (stateFromStore) => {
//     return {
//         visitedParks: stateFromStore.visitedParksReducer.visitedParks
//     }
// }

export default connect(null, { fetchPostVisitedParks })(VisitedButton)