import React, {Component} from 'react'
import Bubble from './Bubble'

class Dashboard extends Component {
  render() {
    return (
      <body>
        <div id="nav">
          <h1>Cheer App</h1>
          <p>Explore emloyee wellness over time: <span id="year-val"></span><input id="year" type="range" step="1" /></p>
          <p>
            Choose between keywords or entities.
            <input type="radio" name="data-type" value="keyword" checked />
            <label>Keywords</label>
            <input type="radio" name="data-type" value="entities" />
            <label>Entities</label>
          </p>
          <p>Click on a word to see its trends over time.</p>
        </div>

        <Bubble />

        {/* <section class="container">
          <div class="chart-container">
          <svg 
            version="1.1"
            baseProfile="full"
            xmlns="http://www.w3.org/2000/svg" 
            id="map">
          </svg>
        </div>
        <div class="chart-container right">
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
        <div class="tooltip"></div>
      </body>
    )
  }
}

export default Dashboard
