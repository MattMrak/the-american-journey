import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageFavoritedParks from './reducers/manageFavoritedParks'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewJourney from './components/NewJourney';
import JourneysInProgress from './components/JourneysInProgress';
import CompletedJourneys from './components/CompletedJourneys';
import FavoritedParks from './components/FavoritedParks';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const store = createStore(manageFavoritedParks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
      <Route exact path="/home" component={Home} />
      <Route exact path="/newjourney" component={NewJourney} />
      <Route exact path="/journeysinprogress" component={JourneysInProgress} />
      <Route exact path="/completedjourneys" component={CompletedJourneys} />
      <Route exact path="/favoritedparks" component={FavoritedParks} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
