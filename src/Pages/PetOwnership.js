import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import { map } from 'underscore';



class PetOwnership extends Component {


  renderUsers =  () => {
    const user = this.props.allusers;
    return user.map( (u) => {
      return (
        <h1> {u.email} </h1>
      )
    })

  }


  render () {
    return (
      <div >
        { this.renderUsers() }
      </div>
    )
  }
}

export default PetOwnership;
