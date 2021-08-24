import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import { map } from 'underscore';



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
          <p>NSW : { this.SubscribersInNSW()}</p>
          <p>VIC : { this.SubscribersInVIC()}</p>
          <p>SA : { this.SubscribersInSA()}</p>
          <p>WA : { this.SubscribersInWA()}</p>
          <p>QLD : { this.SubscribersInQLD()}</p>
          <p>TAS : { this.SubscribersInTAS()}</p>
        </Card>
      </div>
    )
  }
}

export default Subscribers;
