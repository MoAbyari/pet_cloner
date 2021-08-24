import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import { map } from 'underscore';



class PetOwnership extends Component {


  renderCat =  () => {
    const user = this.props.allusers;
    const catOwner = user.filter(user => user.cat == true);
    return (
      catOwner.length
    )
  }

  renderDog =  () => {
    const user = this.props.allusers;
    const dogOwner = user.filter(user => user.dog == true);
      return dogOwner.length
  }


  render () {
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Pet ownership" bordered={false} style={{ width: 300 }}>
          <p>Total Cat: { this.renderCat() }</p>
          <p>Total Dog: { this.renderDog() }</p>
          <p>Total : { this.renderDog() + this.renderCat() }</p>
        </Card>
      </div>
    )
  }
}

export default PetOwnership;
