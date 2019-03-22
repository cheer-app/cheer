import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const keywords = [];

class WordCloudWrapper extends Component {
  render() {
    if (this.props.data) {
      // const keywords = this.props.data[0].keywords.reduce((acc, word) => {
      //   let firstWord = word.text.split(' ')[0];
      //   acc.push({ text: firstWord, value: word.count });
      //   return acc;
      // }, []);
      this.props.data[0].keywords.forEach(elem => {
        console.log(elem);
      });
      console.log(keywords);
      return <WordCloud data={data} />;
    } else {
      return null;
    }
  }
}

export default WordCloudWrapper;
