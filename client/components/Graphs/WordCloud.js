import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

const fakeData = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;

class WordCloudWrapper extends Component {
  render() {
    if (this.props.data) {
      if (this.props.data.length) {
        const keywords = this.props.data[0].keywords
          .reduce((acc, elem) => {
            acc.push(elem.text);
            return acc;
          }, [])
          .join(' ')
          .split(' ')
          .reduce((acc, elem) => {
            elem in acc ? (acc[elem] += 1) : (acc[elem] = 1);
            return acc;
          }, {});
        const arrOfData = [];
        for (let key in keywords) {
          if (key in keywords) {
            arrOfData.push({ text: key, value: keywords[key] });
          }
        }
        console.log(arrOfData);
        return (
          <WordCloud
            padding={40}
            data={fakeData}
            fontSizeMapper={fontSizeMapper}
            font="roboto"
            onWordClick={word => {
              console.log(word);
            }}
          />
        );
      }
    } else {
      return null;
    }
  }
}

export default WordCloudWrapper;

// class WordCloudWrapper extends Component {
//   render() {
//     if (this.props.data) {
//       const keywords = this.props.data[0].keywords.reduce((acc, word) => {
//         let firstWord = word.text.split(' ')[0];
//         acc.push({
//           text: firstWord,
//           value: word.sentiment.score,
//           anger: word.emotion.anger,
//           disgust: word.emotion.disgust,
//           fear: word.emotion.fear,
//           joy: word.emotion.joy,
//           sadness: word.emotion.sadness,
//           sentiment: word.sentiment.label,
//         });
//         return acc;
//       }, []);
//       return (
//         <WordCloud
//           padding={40}
//           data={keywords}
//           fontSizeMapper={fontSizeMapper}
//           font="roboto"
//           onWordClick={word => {
//             console.log(word);
//           }}
//         />
//       );
//     } else {
//       return null;
//     }
//   }
// }

// export default WordCloudWrapper;
