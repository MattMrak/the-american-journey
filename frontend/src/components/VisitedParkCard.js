import React, { Component } from 'react';
import '../App.css';
import FavoriteButton from './FavoriteButton';
import DeleteVisitedButton from './DeleteVisitedButton';

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
                    <p>Entrance Fee: ${this.props.entranceFees}</p>
                    <p>Operating Hours: {this.props.operatingHours}</p>
                    <p>Address: {this.props.addresses}</p>
                    <FavoriteButton 
                        key={this.props.id}
                        id={this.props.id}
                        fullName={this.props.fullName}
                        description={this.props.description}
                        contacts={this.props.contacts}
                        entranceFees={this.props.entranceFees}
                        operatingHours={this.props.operatingHours}
                        addresses={this.props.addresses}
                    />
                    <DeleteVisitedButton 
                        id={this.props.id}
                    />
                    <br />
                </div>
            </div>
        );
    }
}

export default VisitedParkCard;