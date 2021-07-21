import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AllParks from './components/AllParks';
import VisitedParks from './components/VisitedParks';
import FavoritedParks from './components/FavoritedParks';
import { fetchAllParks } from './actions/allParks';
import { fetchVisitedParks } from './actions/visitedParks';
import { fetchFavoritedParks } from './actions/favoritedParks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    allParks: [],
    favoritedParks: [],
    visitedParks: [],
    loggedIn: true,
  }

  componentDidMount() {
    this.props.fetchAllParks()
    this.props.fetchVisitedParks()
    this.props.fetchFavoritedParks()
  }

  render() {
    return (
      <div>
        <Router>
          {/* If you want navbar to go away change state of loggedIn */}
          {this.state.loggedIn ? <NavBar /> : true }
          <Switch>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/allparks" component={AllParks}></Route>
            <Route path="/favoritedparks" component={FavoritedParks}></Route>
            <Route path="/visitedparks" component={VisitedParks}></Route>
            <Route path="/logout" component={Logout}></Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default connect(null, { fetchAllParks , fetchVisitedParks, fetchFavoritedParks })(App);