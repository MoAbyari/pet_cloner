import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';



class SubscriberChart extends Component {

 constructor(props){
   super(props);

   this.state = {
     labels: ['NSW', 'TAZ', 'VIC', 'QLD', 'WA','SA'],
      datasets: [
        {
          label: 'Subscribe',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            this.props.NSW,
            this.props.TAZ,
            this.props.VIC,
            this.props.QLD,
            this.props.WA,
            this.props.SA

          ]
        }
      ]
   }
 }


  render() {
      return (
        <div>
          <Bar
            data={this.state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }

}

export default SubscriberChart;
