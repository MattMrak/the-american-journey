import '../App.css';
import { useHistory } from "react-router-dom";
import Footer from './Footer';

const Home = () => {
    const history = useHistory();
    const handleStart = () => { 
        history.push("/allparks");
    }
    return (
        <div>
            <header className="App-header">
                <h1><br></br>The American</h1>
                <img src={'https://lh3.googleusercontent.com/lruiay6zLDbJWiP4050qRfCA-mR_nH6d2he2Z864h9iPjUmqYuJPJSE--BU3nHY'} className="App-logo" alt="logo" />
                <h1>Journey</h1>
                <div className="app-descr">
                    <h3>
                        The American Journey makes visiting National Parks simple and fun.
                        Find useful information on the United States National Parks, as well as track which parks you have visited.
                        If you come across a park that you have not visited but want to save for easier finding later on, add it to the favorited parks list.
                        Take on the challenge to visit all of the United States National Parks!
                    </h3>
                </div>
                {/* <br></br> */}
                <button onClick={handleStart}>Get Started</button>
                <br></br>
            </header>
            <Footer/>
        </div>
    );
}

export default Home;