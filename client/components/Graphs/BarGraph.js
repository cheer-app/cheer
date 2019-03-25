import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  { emotion: 1, rating: 13000 },
  { emotion: 2, rating: 16500 },
  { emotion: 3, rating: 14250 },
  { emotion: 4, rating: 19000 },
  { emotion: 5, rating: 19000 },
];

export default class BarGraph extends Component {
  render() {
    console.log('bargraph state', this.props.state);
    if (this.props.data) {
      return (
        <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
          <VictoryAxis
            tickValues={['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness']}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar data={data} x="emotion" y="rating" />
        </VictoryChart>
      );
    } else {
      return null;
    }
  }
}

// export default class BarGraph extends Component {
//   render() {
//     if (this.props.data) {
//       console.log(this.props.data[0].keywords);
//       return (
//         <VictoryChart
//           theme={VictoryTheme.material}
//           domainPadding={10}
//           alignment="start"
//         >
//           <VictoryAxis
//             tickValues={[1, 2, 3, 4, 5]}
//             tickFormat={['anger', 'disgust', 'fear', 'joy', 'sadness']}
//           />
//           <VictoryAxis dependentAxis tickFormat={x => `${x / 1000}%`} />
//           <VictoryBar data={data} x="emotion" y="earnings" />
//         </VictoryChart>
//       );
//     } else {
//       return null;
//     }
//   }
// }
