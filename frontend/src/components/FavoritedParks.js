import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
class FavoritedParks extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Favorited Parks</h1>
                </header>
                <Footer/>
            </div>
        );
    }
}

export default FavoritedParks;
