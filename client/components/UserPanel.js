import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UserUpdateForm from './UserUpdateForm'
import UserDetails from './UserDetails'
import query from '../queries/UserResponseSparkline'
import { graphql } from 'react-apollo'
import { LineChart, Line, } from 'recharts'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sparkline: {
    marginLeft: 100,
    marginRight: 10,
    width: 200,
  },
})

class UserPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState(prevState => ({ edit: !prevState.edit }))
  }

  render() {
    const { user, classes } = this.props
    const { textResponses } = this.props.data
    const data = textResponses

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.container}>
              <Typography className={classes.text}>{user.name}</Typography>
              <div>
                <LineChart
                  width={250}
                  height={30}
                  data={data}
                  className={classes.sparkline}
                >
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
            </div>
          </ExpansionPanelSummary>
          {this.state.edit ? (
            <UserUpdateForm user={user} toggleEdit={this.toggleEdit} />
          ) : (
            <UserDetails user={user} toggleEdit={this.toggleEdit} />
          )}
        </ExpansionPanel>
      </div>
    )
  }
}

export default withStyles(styles)(
  graphql(query, {
    options: ownProps => ({
      variables: { userSlackId: ownProps.user.slackId },
    }),
  })(UserPanel)
)
