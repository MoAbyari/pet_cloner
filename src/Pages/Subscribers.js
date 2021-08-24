import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import SubscriberChart from './SubscriberChart';



class Subscribers extends Component {



  SubscribersInNSW =  () => {
    const user = this.props.allusers;
    const userNSW = user.filter(user => user.ausState === "NSW");
      return userNSW.length
  }

  SubscribersInVIC =  () => {
    const user = this.props.allusers;
    const userVIC = user.filter(user => user.ausState === "VIC");
      return userVIC.length
  }

  SubscribersInSA =  () => {
    const user = this.props.allusers;
    const userSA = user.filter(user => user.ausState === "SA");
      return userSA.length
  }

  SubscribersInWA =  () => {
    const user = this.props.allusers;
    const userWA = user.filter(user => user.ausState === "WA");
      return userWA.length
  }
  SubscribersInQLD =  () => {
    const user = this.props.allusers;
    const userQLD = user.filter(user => user.ausState === "QLD");
      return userQLD.length
  }

  SubscribersInTAS =  () => {
    const user = this.props.allusers;
    const userTAS = user.filter(user => user.ausState === "TAS");
      return userTAS.length
  }


  render () {
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Subscribers by State" bordered={false} style={{ width: 300 }}>
          <SubscriberChart
            NSW = { this.SubscribersInNSW()}
            VIC = { this.SubscribersInVIC()}
            TAS = { this.SubscribersInTAS()}
            QLD = { this.SubscribersInQLD()}
            SA = { this.SubscribersInSA()}
            WA = { this.SubscribersInWA()}
          />
        </Card>
      </div>
    )
  }
}

export default Subscribers;
