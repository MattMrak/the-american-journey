import '../App.css';
import { useHistory } from "react-router-dom";
import Footer from './Footer';

const Home = () => {
    const history = useHistory();
    const handleStart = () => { 
        history.push("/journeysinprogress");
    }
    return (
        <div>
            <header className="App-header">
                <h1><br></br>The American</h1>
                <img src={'https://lh3.googleusercontent.com/lruiay6zLDbJWiP4050qRfCA-mR_nH6d2he2Z864h9iPjUmqYuJPJSE--BU3nHY'} className="App-logo" alt="logo" />
                <h1>Journey</h1>
                <div className="app-descr">
                    <h3>
                        This app makes planning a roadtrip to National Parks simple and fun. 
                        It also tracks completed journeys so you will always know which National Parks you have visited.
                        Take on the challenge to visit all of the United States' National Parks!
                    </h3>
                </div>
                <button onClick={handleStart}>Get Started</button>
                <br></br>
            </header>
            <Footer/>
        </div>
    );
}

export default Home;