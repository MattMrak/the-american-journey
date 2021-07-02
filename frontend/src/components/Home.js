import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>The American</h1>
                    <img src={'https://lh3.googleusercontent.com/lruiay6zLDbJWiP4050qRfCA-mR_nH6d2he2Z864h9iPjUmqYuJPJSE--BU3nHY'} className="App-logo" alt="logo" />
                    <h1>Journey</h1>
                    <h3>
                        This app makes planning a roadtrip to National Parks simple and fun. 
                        It also tracks completed journeys so you will always know which National Parks you have visited.
                        Take on the challenge to visit all of the United States' National Parks!
                    </h3>
                </header>
                <Footer/>
            </div>
        );
    }
}

export default Home;
