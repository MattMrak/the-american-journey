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
    favoritedParks: []
  }
  componentDidMount(){
    fetch("http://localhost:3001/favorited_parks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          favoritedParks: json
        })
      })
    fetch("http://localhost:3001/all_parks")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          allParks: json
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
            <Route path="/allparks" component={() => {
              const allParksJSX = <AllParks allParks={this.state.allParks} /> 
              return (this.state.allParks.length > 0 ? allParksJSX : <h1>Loading...</h1>)
            }}></Route>
            <Route path="/favoritedparks" component={() => {
              const favoritedParksJSX = <FavoritedParks favoritedParks={this.state.favoritedParks} /> 
              return (this.state.favoritedParks.length > 0 ? favoritedParksJSX : <h1>Loading...</h1>)
            }}></Route>
            <Route path="/visitedparks" component={VisitedParks}></Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App;