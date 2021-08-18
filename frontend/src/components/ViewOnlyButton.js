import React, { Component } from 'react';
import '../App.css';
import { withRouter } from "react-router";

class ViewOnlyButton extends Component {

    handleViewOnly = () => {
        this.props.history.push(`/favoritedparks/${this.props.id}`)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleViewOnly}>View Only!</button>
            </div>
        );
    }
}

export default withRouter(ViewOnlyButton);