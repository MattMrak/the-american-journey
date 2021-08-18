import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllParks from './components/AllParks';
import AllParksContainer from './containers/AllParksContainer';
import VisitedParks from './components/VisitedParks';
import FavoritedParks from './components/FavoritedParks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
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
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/allparks" component={AllParks}></Route>
            <Route exact path="/allparks/:id" component={AllParksContainer}></Route>
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