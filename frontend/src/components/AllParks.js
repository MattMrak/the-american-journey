import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux"
import { fetchAllParks } from '../actions/allParks';


// For each journey in progress, add a button to 
// edit/delete the journey or mark as completed.

class AllParks extends Component {
    
    state = {
        allParks: []
    }

    componentDidMount() {
        // this.state.fetchAllParks()
        this.props.fetchAllParks()
    }

    render() {
        // const allParks = this.props.allParks.map(aP => <AllParks allParks={aP} />)
        const allParks = this.props.allParks
        return (
            <div>
                <header className="App-header">
                    <h1> {allParks} </h1>
                </header>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (stateFromStore) => {
    return{
        allParks: stateFromStore.allParks
    }
}

// export default AllParks;
export default connect(mapStateToProps, { fetchAllParks })(AllParks)