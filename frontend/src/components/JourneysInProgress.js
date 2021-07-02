import '../App.css';
import { useHistory } from "react-router-dom";
import Footer from './Footer';

const JourneysInProgress = () => {
    const history = useHistory();
    const handleNew = () => { 
        history.push("/newjourney");
    }
    return (
        <div>
            <header className="App-header">
                <h1>Journeys In Progress</h1>
                <button onClick={handleNew}>New Journey</button>
            </header>
            <Footer/>
        </div>
    );
}

// For each journey in progress, add a button to 
// edit/delete the journey or mark as completed.

export default JourneysInProgress;