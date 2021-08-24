import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';



class Subscribers extends Component {

  render () {
    const user = this.props.allusers;
    const NSWuser = user.filter(user => user.ausState === "NSW").length;
    const VICuser = user.filter(user => user.ausState === "VIC").length;
    const QLDuser = user.filter(user => user.ausState === "QLD").length;
    const WAuser = user.filter(user => user.ausState === "WA").length;
    const SAuser = user.filter(user => user.ausState === "SA").length;
    const TASuser = user.filter(user => user.ausState === "TAS").length;

    return (
      <div className="border-less-wrapper">
        <h3 style={{textAlign:"center"}}>Subscribers by State</h3>
        <div className="site-card-border-less-wrapper">
            <Bar
              data={
                {
                labels: ['NSW', 'VIC', 'QLD', 'WA','SA', 'TAS'],
                 datasets: [
                   {
                   label: 'Subscribe',
                   backgroundColor: ['#89c3e8','#49aceb','#1697e9','#0178c3','#035990','#023d63'],
                   borderColor: 'rgba(0,0,0,1)',
                   borderWidth: 2,
                   data: [
                      NSWuser,
                      VICuser,
                      QLDuser,
                      WAuser,
                      SAuser,
                      TASuser
                   ]}
                 ]
                }
              }
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'Subscribers by State ',
                  fontSize:17
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
        </div>
      </div>

    )
  }
}

export default Subscribers;
