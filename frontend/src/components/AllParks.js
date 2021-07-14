import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';

// For each park, add a button to 
// favorite/mark_visited.

class AllParks extends Component {
    
    state = {
        allParks: []
    }

    // componentDidMount() {
    //     this.props.fetchAllParks()
    //     // debugger
    // }
    
    render() {
        console.log("You are hitting here")
        const allParks = this.props.allParks.map(park => <h1>{park.full_name}</h1>)
        return (
            <div>
                <header className="App-header">
                    <h1> {allParks} </h1>
                    {/* <h1> {allParks} </h1> */}
                </header>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (stateFromStore) => {
    return {
        allParks: stateFromStore.allParksReducer.allParks
    }
}

export default connect(mapStateToProps, { fetchAllParks })(AllParks)