import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './App.css';
import { db } from '../services/firebase.js'
import validate from '../services/validate.js';

import React, {Component} from 'react';
const database = db.collection("Users");


class Subscribe extends Component {

  constructor(){
    super();
      this.state = {
        firstName: ' ',
        lastName: ' ',
        email: ' ',
        ausState: ' ',
        dog: false,
        cat: false
      }
    }

    _submitHandler = (e) => {
      e.preventDefault();
      db.collection("Users").doc()
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        ausState:this.state.ausState,
        dog: this.state.dog,
        cat: this.state.cat},
        {merge:true})
    }

  _renderFirstName = (e) => {
    this.setState({firstName: e.target.value});
  }
  _renderLastName = (e) => {
    this.setState({lastName: e.target.value});
  }
  _renderEmail = (e) => {
    this.setState({email: e.target.value});
  }
  _renderAuState = (e) => {
    this.setState({ausState: e.target.value});
  }

  _renderDog = (e) => {
    this.setState({dog: (!this.state.dog)});
  }

  _renderCat = (e) => {
    this.setState({cat: (!this.state.cat)});
  }


  form = () => {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          First Name
          <input
            type="text"
            onChange={ this._renderFirstName }
          />
          Last Name
          <input
            type="text"
            onChange={ this._renderLastName }
          />
          email
          <input
            type="text"
            onChange= { this._renderEmail }
          />
          State
          <input
            type="text"
            onChange= { this._renderAuState }
          />
          Dog
          <input type="checkbox" onChange= { this._renderDog }/>
          Cat
          <input type="checkbox" onChange= { this._renderCat }/>
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
