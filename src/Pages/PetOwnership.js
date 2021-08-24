import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import { map } from 'underscore';
import {Pie} from 'react-chartjs-2';



class PetOwnership extends Component {

  render () {
    const user = this.props.allusers;
    const catOwner = user.filter(user => user.cat == true).length;
    const dogOwner = user.filter(user => user.dog == true).length;

    return (
      <div className="border-less-wrapper">
        <h3 style={{textAlign:"center"}}>Pet ownership</h3>
        <div className="site-card-border-less-wrapper">
            <Pie
              data={
                {
                labels: ['Cat', 'Dog', 'Both'],
                 datasets: [
                   {
                   backgroundColor: ['#48a4e7','#0087e9','#0467b0'],
                   borderColor: 'rgba(0,0,0,1)',
                   borderWidth: 2,
                   data: [
                      catOwner,
                      dogOwner,
                      catOwner+dogOwner
                   ]}
                 ]
                }
              }
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'Pet ownership',
                  fontSize:17
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
        </div>
          <div className="chart-numbers">
              <h4><weak>Total Cat:</weak> { catOwner }</h4>
              <h4><strong>Total Dog:</strong> { dogOwner }</h4>
              <h4><strong>Total :</strong> { dogOwner + catOwner }</h4>
          </div>

      </div>

    )
  }
}

export default PetOwnership;
