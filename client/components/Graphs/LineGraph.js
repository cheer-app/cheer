import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { graphql } from 'react-apollo';
import query from '../../queries/Aggregate';

class LineGraph extends Component {
  render() {
    const { aggregate } = this.props.data;
    console.log(aggregate);

    if (aggregate) {
      const convertTime = time => {
        let date = new Date(null);
        date.setSeconds(time);
        return date.toString().slice(4, 10);
      };

      const data = aggregate
        .map(elem => ({
          x: String(convertTime(elem.date)),
          y: elem.score,
        }))
        .filter(elem => elem.x.includes('Jan'));

      console.log('data', data);
      return (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            domain={{ y: [-1, 1] }}
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '2px solid #ccc' },
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

export default graphql(query)(LineGraph);
