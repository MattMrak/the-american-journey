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
import AllParks from './components/AllParks';
import VisitedParks from './components/VisitedParks';
import FavoritedParks from './components/FavoritedParks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import userReducer from './reducers/userReducer';
import allParksReducer from './reducers/allParksReducer';
import visitedParksReducer from './reducers/visitedParksReducer';
import favoritedParksReducer from './reducers/favoritedParksReducer';
// import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  currentUser: userReducer,
  allParksReducer: allParksReducer,
  visitedParksReducer: visitedParksReducer,
  favoritedParks: favoritedParksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>,
  <Router>
    <div>
      <NavBar/>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/allparks" component={AllParks} />
      <Route exact path="/visitedparks" component={VisitedParks} />
      <Route exact path="/favoritedparks" component={FavoritedParks} />
    </div>
  </Router>),
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
