// import logo from './logo.svg';
import './App.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import NewJourney from '../components/NewJourney';
import JourneysInProgress from '../components/JourneysInProgress';
import CompletedJourneys from '../components/CompletedJourneys';
import FavoritedParks from '../components/FavoritedParks';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/newjourney" component={NewJourney} />
          <Route exact path="/journeysinprogress" component={JourneysInProgress} />
          <Route exact path="/completedjourneys" component={CompletedJourneys} />
          <Route exact path="/favoritedparks" component={FavoritedParks} />
      </div>
    </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          The American Journey
        </h1>
      </header>
  );
}

export default App;

// const App = (props) => {
//   return (
//     <Router>
//       <div className="app">
//         <NavBar/>
//         <Route exact path="/" component={App} />
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/newjourney" component={NewJourney} />
//         <Route exact path="/journeysinprogress" component={JourneysInProgress} />
//         <Route exact path="/completedjourneys" component={CompletedJourneys} />
//         <Route exact path="/favoritedparks" component={FavoritedParks} />
//       </div>
//     </Router>
//   );
// };




// function App() {
//   return (
//     <Router>
//       <div className="App">
//           <NavBar/>
//           <Route exact path="/" component={App} />
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/newjourney" component={NewJourney} />
//           <Route exact path="/journeysinprogress" component={JourneysInProgress} />
//           <Route exact path="/completedjourneys" component={CompletedJourneys} />
//           <Route exact path="/favoritedparks" component={FavoritedParks} />
//             <header className="App-header">
//               {/* <img src={logo} className="App-logo" alt="logo" /> */}
//               <h1>
//                 The American Journey
//               </h1>
//             </header>
//       </div>
//     </Router>
//   );
// }