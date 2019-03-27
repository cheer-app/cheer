import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/WatsonData';
import BarGraph from './Graphs/BarGraph';
import WordCloudWrapper from './Graphs/WordCloud';
import LineGraph from './Graphs/LineGraph';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

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
      tab: 0,
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

  handleChange = (event, tab) => {
    this.setState({ tab });
  };

  render() {
    const { watson } = this.props.data;
    const { tab } = this.state;

    return (
      <Paper>
        <Tabs
          value={this.state.tab}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Trending" />
          <Tab label="Historical" />
        </Tabs>

        {tab === 0 && <TabContainer>
          <div>
            <h3>Keywords Based on Survey Responses</h3>
            <WordCloudWrapper data={watson} handleClick={word => this.handleClick(word)} />
          </div>
          <div>
            <h3>Emotional Response of Keyword</h3>
            <BarGraph data={watson} state={this.state} />
          </div>
        </TabContainer>}

        {tab === 1 && <TabContainer>
          <div>
            <h3>Overall Company Sentiment Over Time</h3>
            <LineGraph />
          </div>
        </TabContainer>}
      </Paper>
    );
  }
}

export default graphql(query)(Dashboard);
