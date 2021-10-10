import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllParks from './components/AllParks';
import VisitedParks from './components/VisitedParks';
import FavoritedParks from './components/FavoritedParks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    allParks: [],
    visitedParks: [],
    favoritedParks: []
  }
  componentDidMount(){
    fetch("http://localhost:3001/visited_parks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          visitedParks: json
        })
      })
    fetch("http://localhost:3001/favorited_parks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          favoritedParks: json
        })
      })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/allparks" component={AllParks}></Route>
            <Route path="/favoritedparks" component={FavoritedParks}></Route>
            <Route path="/visitedparks" component={VisitedParks}></Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App;