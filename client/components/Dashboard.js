import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { watson } = this.props.data;
    if (watson) {
      console.log(watson[0].keywords);
      return (
        <div>
          <WordCloudWrapper data={watson} />;
          <BarGraph data={watson} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default graphql(query)(Dashboard);
