import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import { fetchMap } from '../reducers/actions';
// import { connect } from 'react-redux';
class NewJourney extends Component {
    // state = {
    //     user: ""
    // }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>New Journey</h1>
                </header>
                {fetchMap}
                <Footer/>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         users: () => { dispatch(fetchMap) }
//     }
// }

// export default connect(null, { fetchMap, addMap, mapDispatchToProps })(NewJourney);

export default NewJourney;
