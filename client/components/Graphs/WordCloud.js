import React, { Component } from 'react'
import WordCloud from 'react-d3-cloud'

const fontSizeMapper = word => word.value * 30

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
        })
        return acc
      }, [])
      return (
          <WordCloud
            data={keywords}
            fontSizeMapper={fontSizeMapper}
            font="roboto"
            onWordClick={word => {
              this.props.handleClick(word)
            }}
          />
      );
    } else {
      return null
    }
  }
}

export default WordCloudWrapper
