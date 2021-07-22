import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import allParksReducer from './reducers/allParksReducer';
import visitedParksReducer from './reducers/visitedParksReducer';
import visitedButtonReducer from './reducers/visitedButtonReducer';
import favoritedParksReducer from './reducers/favoritedParksReducer';
import favoriteButtonReducer from './reducers/favoriteButtonReducer';
import deleteVisitedButtonReducer from './reducers/deleteVisitedButtonReducer';
import deleteFavoritedButtonReducer from './reducers/deleteFavoritedButtonReducer';
// import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  currentUser: userReducer,
  allParksReducer: allParksReducer,
  visitedParksReducer: visitedParksReducer,
  visitedButtonReducer: visitedButtonReducer,
  favoritedParksReducer: favoritedParksReducer,
  favoriteButtonReducer: favoriteButtonReducer,
  deleteVisitedButtonReducer: deleteVisitedButtonReducer,
  deleteFavoritedButtonReducer: deleteFavoritedButtonReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();