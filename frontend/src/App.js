import './App.css';
import React, { Component } from 'react';
// import { useHistory } from "react-router-dom";
import Footer from './components/Footer';
// import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import AllParks from './components/AllParks';
import VisitedParks from './components/VisitedParks';
import FavoritedParks from './components/FavoritedParks';
import { fetchAllParks } from './reducers/actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import './index.js'

class App extends Component {

  state = {
    allParks: [],
    favoritedParks: [],
    visitedParks: [],
    loggedIn: true,
  }

  componentDidMount() {
    this.props.fetchAllParks()
  }

  // const history = useHistory();
  
  // const handleLogin = () => { 
  //   history.push("/login");
  // }

  // const handleSignup = () => { 
  //   history.push("/signup");
  // }

  render() {
    return (
      <div>
        <Router>
          {/* If you want navbar to go away change state of loggedIn */}
          {this.state.loggedIn ? <NavBar /> : true }
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/home" component={Home}>
              {/* <Home /> */}
            </Route>
            <Route path="/allparks" component={AllParks}>
              {/* <AllParksContainer /> */}
            </Route>
            <Route path="/favoritedparks" component={FavoritedParks}>
              {/* <FavoritedParksContainer /> */}
            </Route>
            <Route path="/visitedparks" component={VisitedParks}>
              {/* <VisitedParksContainer /> */}
            </Route>
            <Route path="/logout" component={Logout}>
              {/* <LogoutContainer /> */}
            </Route>
          </Switch>
        </Router>
        {/* <header className="App-header">
          <h1>The American</h1>
          <img src={'https://lh3.googleusercontent.com/lruiay6zLDbJWiP4050qRfCA-mR_nH6d2he2Z864h9iPjUmqYuJPJSE--BU3nHY'} className="App-logo" alt="logo" />
          <h1>
            Journey
          </h1>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </header> */}
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

// export default App;

export default connect(mapStateToProps, {fetchAllParks})(App);