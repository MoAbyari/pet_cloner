import './App.css';
import { db } from '../services/firebase.js'
import validate from '../services/validate.js';

import React, {Component} from 'react';
const database = db.collection("Users");



class Signup {
  constructor(firstName, lastName, email, ausState, dog, cat) 
     {  this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.ausState = ausState;
        this.dog = dog;
        this.cat = cat;
  }
}

class Subscribe extends Component {

  constructor() {
    super();
      this.state = {
        firstName: ' ',
        lastName: ' ',
        email: ' ',
        ausState: ' ',
        dog: false,
        cat: false
      }
      this._submitHandler = this._submitHandler.bind(this);
    }

    _submitHandler(e) {
      e.preventDefault();
      const formEntry = new Signup (
          this.state.firstName, 
          this.state.lastName, 
          this.state.email, 
          this.state.ausState, 
          this.state.dog, 
          this.state.cat
      )
      console.log(formEntry)
      database.doc().set({...formEntry});
    }

    // https://codepen.io/pen/?&editors=001 
    
  form = () => {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
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
