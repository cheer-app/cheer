import React from 'react'
import { graphql } from 'react-apollo'
import { withStyles, Button } from '@material-ui/core'
import query from '../queries/Questions'
import QuestionPanel from './QuestionPanel'

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  grow: {
    flexGrow: 1,
    display: 'inline-block',
  },
  float: {
    float: 'right',
    display: 'inline-block',
    marginLeft: -12,
    marginRight: 5,
  },
}

function Questions(props) {
  const { classes } = props
  const { questions } = props.data
  console.log('questions:', questions)

  return (
    <div>
      <span className={classes.root}>
        <h3 className={classes.grow}>Questions</h3>
        <Button className={classes.float}>New Question</Button>
      </span>
      <br />
      {!questions ? (
        <div>loading...</div>
      ) : (
        questions.map(question => {
          return <QuestionPanel key={question.id} question={question} />
        })
      )}
    </div>
  )
}

export default withStyles(styles)(graphql(query)(Questions))
