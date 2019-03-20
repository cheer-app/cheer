import React from 'react';
import WordCloud from 'react-d3-cloud';
import watsonData from './watson-data';

const data = watsonData.keywords.reduce((acc, keywords) => {
  acc.push({ text: keywords.text, value: keywords.count });
  return acc;
}, []);

const fontSizeMapper = word => Math.log2(word.value) * 40;

const WordCloudWrapper = () => {
  return <WordCloud data={data} fontSizeMapper={fontSizeMapper} />;
};

export default WordCloudWrapper;
