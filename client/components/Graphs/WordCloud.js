import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

// const data = watsonData.keywords.reduce((acc, keywords) => {
//   acc.push({ text: keywords.text, value: keywords.count });
//   return acc;
// }, []);

// const WordCloudWrapper = props => {
//   console.log('data =>', props.data);
//   if (props.data) {
//     const words = props.data[0].keywords.reduce((acc, keywords) => {
//       acc.push({ text: keywords.text, value: keywords.count });
//       return acc;
//     }, []);
//     console.log(words);
//     // const fontSizeMapper = word => Math.log2(word.value) * 40;
//     return <div>hey</div>;
//   }
// };

// export default WordCloudWrapper;

class WordCloudWrapper extends Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data);
      const keywords = this.props.data[0].keywords.reduce((acc, word) => {
        acc.push({ text: word.text, value: word.count });
        return acc;
      }, []);
      // const fontSizeMapper = keywords => Math.log2(keywords.value) * 40;
      console.log('keywords =>', keywords);
      return <WordCloud data={keywords} />;
    } else {
      return null;
    }
  }
}

export default WordCloudWrapper;
