import './App.css';
import { db } from '../services/firebase.js'
import Subscribe from './Subscribe.js'
import LandingPage from './LandingPage.js'
import Dashboard from './Dashboard'



function App() {
  return (
    <div className="App">
     <LandingPage />
     <Dashboard />

    </div>
  );
}

export default App;
