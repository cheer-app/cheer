import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';
import { graphql } from 'react-apollo';
import query from '../../queries/Aggregate';

class LineGraph extends Component {
  render() {
    const { aggregate } = this.props.data;

    if (aggregate) {
      const convertTime = time => {
        let date = new Date(null);
        date.setSeconds(time);
        return date.toString().slice(4, 10);
      };

      const data = aggregate
        .map(elem => ({
          x: convertTime(elem.date),
          y: elem.score,
          z: +convertTime(elem.date).slice(4),
        }))
        .filter(elem => elem.x.includes('Mar'))
        .sort((a, b) => a.z - b.z)
        .map(elem => ({
          x: elem.x,
          y: elem.y,
        }));

      return (
        <VictoryChart width={1000} height={550} theme={VictoryTheme.material}>
          <VictoryLine
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 },
            }}
            domain={{ y: [-1, 1] }}
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '2px solid #ccc' },
            }}
            data={data}
          />
          <VictoryLabel text="Date" x={970} y={270} />
          <VictoryLabel text="Sentiment" x={0} y={20} />
        </VictoryChart>
      );
    } else {
      return null;
    }
  }
}

export default graphql(query)(LineGraph);
