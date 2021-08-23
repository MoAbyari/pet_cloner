import './App.css';
import { db } from '../services/firebase.js'
import React, {Component} from 'react';
const database = db.collection("Users");

class Subscribe extends Component {

  constructor() {
  super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      dog: false,
      cat:false
    }
  }

// function _submitHandler(){
//    const formEntry = new Signup (
//       ("May", "Jones","email@address.com","New South Wales", false, true)
//    )
//    database.doc().set({...formEntry});
// }

  form = () => {
    return(
      <div>
        <form onSubmit={ this._submitHandler }>
          FirstName
          <input
            type="text"
            placeholder="James"
            required
          />
          LastName
          <input
            type="text"
            placeholder="Maroon"
            required
          />
          email
          <input
            type="text"
            placeholder="Maroon@gmail.com"
            required
          />
          state
          <input
            type="number"
            placeholder="New South Wales"
            required
          />
          dog
          <input
            type="checkbox"
            required
          />
          cat
          <input
            type="checkbox"
            required
          />
          <input type="submit" value="Subscribe" />
        </form>

      </div>
  )
}

  render() {
      return(
        <div>
          {this.form()}
        </div>
      );
    }

}

export default Subscribe;
