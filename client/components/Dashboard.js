import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';

class Dashboard extends Component {
  render() {
    const { watson } = this.props.data;

    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <WordCloudWrapper data={watson} />
        <BarGraph data={watson} />
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
