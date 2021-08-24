import React, {Component} from 'react';
import './App.css';
import ActivityOverview from '../Pages/ActivityOverview'
import PetOwnership from '../Pages/PetOwnership'
import Subscribers from '../Pages/Subscribers'
import { db } from '../services/firebase.js'
import Header from '../components/Header.js'
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
      });
      this.setState({allUsers: userInfo})
    })
  }

  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <ActivityOverview allusers = {this.state.allUsers} />
        <div className="chart-container">
          <PetOwnership allusers = {this.state.allUsers} />
          <Subscribers allusers = {this.state.allUsers} />
        </div>
      </div>
    )
  }

}


export default Dashboard;
