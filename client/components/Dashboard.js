import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';
import LineGraph from './Graphs/LineGraph';

class Dashboard extends Component {
  render() {
    const { watson } = this.props.data;
    return (
      <div>
        <WordCloudWrapper data={watson} />

        <BarGraph data={watson} />

        {/* <LineGraph data={watson} /> */}
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
