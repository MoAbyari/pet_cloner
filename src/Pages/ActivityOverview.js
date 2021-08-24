import { Card, Meta} from 'antd';
import React, {Component} from 'react';



class ActivityOverview extends Component {

  render () {
    const user = this.props.allusers;
    const totalSubscribers = user.filter(user => user.email).length;
    const catOwner = user.filter(user => user.cat == true).length;
    const dogOwner = user.filter(user => user.dog == true).length;


    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Subscriber activity overview" bordered={false} style={{ width: 300 }}>
          <p><strong>TOTAL SUBSCRIBERS:</strong> { totalSubscribers }</p>
          <p><strong>Cat Owners:</strong> { catOwner }</p>
          <p><strong>Dog Owners:</strong> { dogOwner }</p>
          <p><strong>Own both Cat and Dog:</strong> { dogOwner + catOwner }</p>
        </Card>
      </div>
    )
  }
}

export default ActivityOverview;
