// import logo from './logo.svg';
import './App.css';
import { useHistory } from "react-router-dom";

function App() {

  const history = useHistory();
  
  const handleLogin = () =>{ 
    history.push("/login");
  }

  const handleSignup = () =>{ 
    history.push("/signup");
  }

  return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          The American Journey
        </h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </header>
  );
}

export default App;