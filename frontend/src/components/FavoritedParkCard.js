import React, { Component } from 'react';
import '../App.css';
import VisitedButton from './VisitedButton';

class FavoritedParkCard extends Component {
    render() {
        return (
            <div className="card">
                <div 
                    id={`favorited-park-card-${this.props.id}`}
                    style={{
                            backgroundColor: `var(--${this.props.type})`, 
                            }}
                >
                    <h1>{this.props.fullName}</h1>
                    <p>Description: {this.props.description}</p>
                    <p>Contacts: {this.props.contacts}</p>
                    <p>Entrance Fees: {this.props.entranceFees}</p>
                    <p>Operating Hours: {this.props.operatingHours}</p>
                    <p>Addresses: {this.props.addresses}</p>
                    <VisitedButton />
                    <button>Delete</button>
                    <br />
                </div>
            </div>
        );
    }
}

export default FavoritedParkCard;