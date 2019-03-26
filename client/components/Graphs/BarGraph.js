import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default class BarGraph extends Component {
  render() {
    const props = this.props.state;
    const data = [
      { emotion: 1, rating: props.anger * 10.5 },
      { emotion: 2, rating: props.disgust * 10.5 },
      { emotion: 3, rating: props.fear * 10.5 },
      { emotion: 4, rating: props.joy * 10.5 },
      { emotion: 5, rating: props.sadness * 10.5 },
    ];
    if (this.props.data) {
      return (
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10}
          animate={{ duration: 1000, onLoad: { duration: 500 } }}
        >
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
