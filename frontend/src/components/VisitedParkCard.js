import React, { Component } from 'react';
import '../App.css';
import FavoriteButton from './FavoriteButton';
import DeleteButton from './DeleteButton';

class VisitedParkCard extends Component {
    render() {
        return (
            <div className="card">
                <div 
                    id={`visited-park-card-${this.props.id}`}
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
                    <FavoriteButton />
                    <DeleteButton />
                    <br />
                </div>
            </div>
        );
    }
}

export default VisitedParkCard;