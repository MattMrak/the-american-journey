import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
class CompletedJourneys extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Completed Journeys</h1>
                </header>
                <Footer/>
            </div>
        );
    }
}

export default CompletedJourneys;
