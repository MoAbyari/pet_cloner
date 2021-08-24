import React, {Component} from 'react';



class Activity extends Component {

  render () {
    const numberOfUsers = this.props.numberOfUsers;
    const text = this.props.text;




    return (
      <div className="numberOfUsers">
      <h1>{numberOfUsers}</h1>
      <p>{text}</p>
      </div>
    )
  }
}

export default Activity;
