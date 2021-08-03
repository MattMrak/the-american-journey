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
                    <h4>Description:</h4> <p>{this.props.description}</p>
                    <h4>Contacts:</h4> <p>{this.props.contacts}</p>
                    <h4>Entrance Fee:</h4> <p>${this.props.entranceFees}</p>
                    <h4>Operating Hours:</h4> <p>{this.props.operatingHours}</p>
                    <h4>Address:</h4> <p>{this.props.addresses}</p>
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