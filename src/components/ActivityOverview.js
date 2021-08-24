import React, {Component} from 'react';
import Activity from "./Activity"


class ActivityOverview extends Component {

  render () {
    const user = this.props.allusers;
    const totalSubscribers = user.filter(user => user.email).length;
    const catOwner = user.filter(user => user.cat === true).length;
    const dogOwner = user.filter(user => user.dog === true).length;
    const dogCatOwner = catOwner + dogOwner


    return (
      <div className="activity-conrainer">
        <h1 className="activity-overview-header">EvaGen Newsletter Dashboard</h1>
        <h3 className="acitivity-overview-subheader">Subscriber activity overview</h3>
        <div className="site-border-less-wrapper">
          <Activity numberOfUsers= {totalSubscribers} text="TOTAL SUBSCRIBERS"/>
          <Activity numberOfUsers= {catOwner} text="Cat Owners"/>
          <Activity numberOfUsers= {dogOwner} text="Dog Owners"/>
          <Activity numberOfUsers= {dogCatOwner} text="Own both Cat and Dog"/>
        </div>
      </div>
    )
  }
}

export default ActivityOverview;
