import './App.css';
import { db } from '../services/firebase.js'
import Subscribe from './Subscribe.js'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
     <Subscribe />
     <Dashboard />
    </div>
  );
}

export default App;
