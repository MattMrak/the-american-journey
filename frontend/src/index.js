import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import NewJourney from './components/NewJourney';
import JourneysInProgress from './components/JourneysInProgress';
import CompletedJourneys from './components/CompletedJourneys';
import FavoritedParks from './components/FavoritedParks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import userReducer from './reducers/userReducer';
import newJourneyReducer from './reducers/newJourneyReducer';
import journeysInProgressReducer from './reducers/journeysInProgressReducer';
import completedJourneysReducer from './reducers/completedJourneysReducer';
import favoritedParksReducer from './reducers/favoritedParksReducer';
// import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  currentUser: userReducer,
  newJourney: newJourneyReducer,
  journeysInProgress: journeysInProgressReducer,
  completedJourneys: completedJourneysReducer,
  favoritedParks: favoritedParksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render((
  <Router>
    <div>
      <NavBar/>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/newjourney" component={NewJourney} />
      <Route exact path="/journeysinprogress" component={JourneysInProgress} />
      <Route exact path="/completedjourneys" component={CompletedJourneys} />
      <Route exact path="/favoritedparks" component={FavoritedParks} />
    </div>
  </Router>),
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
