import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      sentiment: '',
      text: '',
      value: 0,
      anger: 0,
      disgust: 0,
      fear: 0,
      joy: 0,
      sadness: 0,
    };
  }
  render() {
    const { watson } = this.props.data;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WordCloudWrapper data={watson} />
        <BarGraph data={watson} />
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
