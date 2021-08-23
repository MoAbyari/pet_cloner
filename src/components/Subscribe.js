import './App.css';
import { db } from '../services/firebase.js'
import validate from '../services/validate.js';

import React, {Component} from 'react';
const database = db.collection("Users");


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
      const formEntry = {
        firstName : this.state.firstName,
        lastName : this.state.lastName, 
        email : this.state.email, 
        ausState : this.state.ausState, 
        dog : this.state.dog,
        cat : this.state.cat,
      }
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
