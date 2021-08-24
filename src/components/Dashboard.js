import React, {Component} from 'react';
import './App.css';
import PetOwnership from '../Pages/PetOwnership'
import Subscribers from '../Pages/Subscribers'
import { db } from '../services/firebase.js'
const database = db.collection("Users");


class Dashboard extends Component {

  constructor(){
    super();
    this.state = {
      allUsers: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    db.collection("Users").get().then((snapshot) => {
      const userInfo = [];
      snapshot.forEach( (snap) => {
        userInfo.push(snap.data());
        this.setState({allUsers: userInfo})
      });
    })
  }


  render() {
    return (
      <div>
        <PetOwnership allusers = {this.state.allUsers} />
        <Subscribers allusers = {this.state.allUsers} />
      </div>
    )
  }

}


export default Dashboard;
