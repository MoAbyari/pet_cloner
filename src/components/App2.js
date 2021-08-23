import './App.css';
import { db } from '../services/firebase.js'

function _submitHandler(){
   console.log('hello')
}

function App() {
  return (
    <div className="App2">
       <button onClick={_submitHandler}></button>
    </div>
  );
}

export default App;
