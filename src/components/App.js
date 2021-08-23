import './App.css';
import { db } from '../services/firebase.js'
import Subscribe from './Subscribe.js'

function App() {
  return (
    <div className="App">
     <Subscribe />
    </div>
  );
}

export default App;
