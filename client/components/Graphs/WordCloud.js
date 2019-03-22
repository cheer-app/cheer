import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => word.value * 60;

class WordCloudWrapper extends Component {
  render() {
    if (this.props.data) {
      const keywords = this.props.data[0].keywords.reduce((acc, word) => {
        let firstWord = word.text.split(' ')[0];
        acc.push({ text: firstWord, value: word.sentiment.score });
        return acc;
      }, []);
      return <WordCloud data={keywords} fontSizeMapper={fontSizeMapper} />;
    } else {
      return null;
    }
  }
}
export default WordCloudWrapper;
