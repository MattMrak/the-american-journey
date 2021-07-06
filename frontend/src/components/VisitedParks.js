import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';

class VisitedParks extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Visited Parks</h1>
                </header>
                <Footer/>
            </div>
        );
    }
}

export default VisitedParks;
