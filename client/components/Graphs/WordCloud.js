import React from 'react';
import WordCloud from 'react-d3-cloud';
import watsonData from './watson-data';

const data = watsonData.keywords.reduce((acc, keywords) => {
  acc.push({ text: keywords.text, value: keywords.count });
  return acc;
}, []);

const fakeData = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;

const WordCloudWrapper = () => {
  console.log(data);
  return <WordCloud data={fakeData} fontSizeMapper={fontSizeMapper} />;
};

export default WordCloudWrapper;
