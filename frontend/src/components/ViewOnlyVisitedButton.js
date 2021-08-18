import React, { Component } from 'react';
import '../App.css';
import { withRouter } from "react-router";

class ViewOnlyVisitedButton extends Component {

    handleViewOnly = () => {
        this.props.history.push(`/visitedparks/${this.props.id}`)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleViewOnly}>View Only!</button>
            </div>
        );
    }
}

export default withRouter(ViewOnlyVisitedButton);