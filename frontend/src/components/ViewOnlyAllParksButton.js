import React, { Component } from 'react';
import '../App.css';
import { withRouter } from "react-router";

class ViewOnlyAllParksButton extends Component {

    handleViewOnly = () => {
        this.props.history.push(`/allparks/${this.props.id}`)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleViewOnly}>View Only!</button>
            </div>
        );
    }
}

export default withRouter(ViewOnlyAllParksButton);