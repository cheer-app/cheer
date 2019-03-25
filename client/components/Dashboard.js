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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(word) {
    this.setState({
      sentiment: word.sentiment,
      text: word.text,
      value: word.value,
      anger: word.anger,
      disgust: word.disgust,
      fear: word.fear,
      joy: word.joy,
      sadness: word.sadness,
    });
  }
  render() {
    const { watson } = this.props.data;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WordCloudWrapper
          data={watson}
          handleClick={word => this.handleClick(word)}
        />
        <BarGraph data={watson} state={this.state} />
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
