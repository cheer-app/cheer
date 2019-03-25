import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import BarGraph from './BarGraph';

const fontSizeMapper = word => word.value * 60;

class WordCloudWrapper extends Component {
  render() {
    if (this.props.data) {
      const keywords = this.props.data[0].keywords.reduce((acc, word) => {
        acc.push({
          text: word.text,
          value: word.sentiment.score,
          anger: word.emotion.anger,
          disgust: word.emotion.disgust,
          fear: word.emotion.fear,
          joy: word.emotion.joy,
          sadness: word.emotion.sadness,
          sentiment: word.sentiment.label,
        });
        return acc;
      }, []);
      return (
        <WordCloud
          padding={40}
          data={keywords}
          fontSizeMapper={fontSizeMapper}
          font="roboto"
          onWordClick={word => {
            this.props.handleClick(word);
          }}
        />
      );
    } else {
      return null;
    }
  }
}

export default WordCloudWrapper;

// class WordCloudWrapper extends Component {
//   render() {
//     if (this.props.data) {
//       if (this.props.data.length) {
//         console.log(this.props.data[0].keywords);
//         const keywords = this.props.data[0].keywords
//           .reduce((acc, elem) => {
//             acc.push(elem.text);
//             return acc;
//           }, [])
//           .join(' ')
//           .split(' ')
//           .reduce((acc, elem) => {
//             elem in acc ? (acc[elem] += 1) : (acc[elem] = 1);
//             return acc;
//           }, {});
//         const data = [];
//         for (let key in keywords) {
//           if (key in keywords) {
//             data.push({ text: key, value: keywords[key] });
//           }
//         }
//         console.log('data', data);
//         return (
//           <WordCloud
//             padding={40}
//             data={data}
//             fontSizeMapper={fontSizeMapper}
//             font="roboto"
//             onWordClick={word => {
//               console.log(word);
//             }}
//           />
//         );
//       }
//     } else {
//       return null;
//     }
//   }
// }

// export default WordCloudWrapper;
