import React, {Component} from 'react';
import '../components/App.css';
import ActivityOverview from '../components/ActivityOverview'
import PetOwnership from '../components/PetOwnership'
import Subscribers from '../components/Subscribers'
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
