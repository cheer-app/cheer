import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';

class Dashboard extends Component {
  render() {
    const { watson } = this.props.data;

    return (
      <div>
        <div id="nav">
          <h1>Cheer App</h1>
          <p>
            Explore emloyee wellness over time: <span id="year-val" />
            <input id="year" type="range" step="1" />
          </p>
          <p>
            Choose between keywords or entities.
            <input type="radio" name="data-type" value="keyword" />
            <label>Keywords</label>
            <input type="radio" name="data-type" value="entities" />
            <label>Entities</label>
          </p>
          <p>Click on a word to see its trends over time.</p>
        </div>

        <WordCloudWrapper data={watson} />

        <BarGraph data={watson} />

        <div className="tooltip" />
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
