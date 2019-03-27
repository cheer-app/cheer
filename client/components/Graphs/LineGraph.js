import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { graphql } from 'react-apollo';
import query from '../../queries/Aggregate';

class LineGraph extends Component {
  render() {
    const { aggregate } = this.props.data
    console.log(aggregate)

    return (
      <div></div>
    )

    // if (this.props.data) {
    //   const data = this.props.data[0].keywords.reduce((acc, elem) => {
    //     acc.push({ x: elem.text[0], y: elem.sentiment.score });
    //     return acc;
    //   }, []);
    //   return (
    //     <VictoryChart theme={VictoryTheme.material}>
    //       <VictoryLine
    //         domain={{ y: [-2, 2] }}
    //         style={{
    //           data: { stroke: '#c43a31' },
    //           parent: { border: '1px solid #ccc' },
    //         }}
    //         data={data}
    //       />
    //     </VictoryChart>
    //   );
    // } else {
    //   return null;
    // }
  }
}

export default graphql(query)(LineGraph);
