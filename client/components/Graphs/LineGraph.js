import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

class LineGraph extends Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data[0].keywords);
      const data = this.props.data[0].keywords.reduce((acc, elem) => {
        acc.push({ x: elem.text[0], y: elem.sentiment.score });
        return acc;
      }, []);
      return (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            domain={{ y: [-2, 2] }}
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
