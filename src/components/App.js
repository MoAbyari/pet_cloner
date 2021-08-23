import './App.css';
import { db } from '../services/firebase.js'
import Subscribe from './Subscribe.js'
import LandingPage from './LandingPage.js'



function App() {
  return (
    <div className="App">
     <LandingPage />
    </div>
  );
}

export default App;
