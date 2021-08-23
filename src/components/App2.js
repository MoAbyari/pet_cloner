import './App.css';
import { db } from '../services/firebase.js'

const database = db.collection("Users");

class Signup {
   constructor(
      firstName='Lay', 
      lastName='Smith', 
      email='email@address.com', 
      state='New South Wales', 
      dog=true, 
      cat=false) 
      {
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.state = state;
         this.dog = dog;
         this.cat = cat;
   }
}

function _submitHandler(){
   const formEntry = new Signup (
      ("May", "Jones","email@address.com","New South Wales", false, true)
   )
   database.doc().set({...formEntry});
}

function App2() {
  return (
    <div className="App2">
       <button onClick={_submitHandler}>Test posting</button>
    </div>
  );
}

export default App2;
