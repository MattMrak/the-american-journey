import './App.css';
import { useHistory } from "react-router-dom";
import Footer from './components/Footer';

function App() {

  const history = useHistory();
  
  const handleLogin = () => { 
    history.push("/login");
  }

  const handleSignup = () => { 
    history.push("/signup");
  }

  return (
      <div>
      <header className="App-header">
        <h1>The American</h1>
        <img src={'https://lh3.googleusercontent.com/lruiay6zLDbJWiP4050qRfCA-mR_nH6d2he2Z864h9iPjUmqYuJPJSE--BU3nHY'} className="App-logo" alt="logo" />
        <h1>
          Journey
        </h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </header>
      <Footer/>
      </div>
  );
}

export default App;