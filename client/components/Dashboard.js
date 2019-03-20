import React, { Component } from 'react';
// import Bubble from './Bubble';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

class Dashboard extends Component {
  render() {
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
            <input type="radio" name="data-type" value="keyword" checked />
            <label>Keywords</label>
            <input type="radio" name="data-type" value="entities" />
            <label>Entities</label>
          </p>
          <p>Click on a word to see its trends over time.</p>
        </div>

        <WordCloud
          data={data}
          fontSizeMapper={fontSizeMapper}
          // rotate={rotate}
        />

        {/* <Bubble /> */}

        {/* <section className="container">
          <div className="chart-container">
          <svg
            version="1.1"
            baseProfile="full"
            xmlns="http://www.w3.org/2000/svg"
            id="map">
          </svg>
        </div>
        <div className="chart-container right">
          <svg
            version="1.1"
            baseProfile="full"
            xmlns="http://www.w3.org/2000/svg"
            id="pie">
          </svg>
          <svg
            version="1.1"
            baseProfile="full"
            xmlns="http://www.w3.org/2000/svg"
            id="bar">
          </svg>
        </div>
        </section> */}
        <div className="tooltip" />
      </div>
    );
  }
}

export default Dashboard;
