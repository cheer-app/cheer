import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

const fakeData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

class LineGraph extends Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data[0].keywords);
      const data = this.props.data[0].keywords.reduce((acc, elem) => {
        acc.push({ x: elem.text[0], y: elem.sentiment.score });
        return acc;
      }, []);
      console.log(data);
      return (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            domain={{ y: [0.95, 1] }}
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
            }}
            data={data}
          />
        </VictoryChart>
      );
    } else {
      return null;
    }
  }
}

export default LineGraph;
