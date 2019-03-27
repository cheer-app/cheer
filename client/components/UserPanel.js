import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UserForm from './UserForm'
import UserDetails from './UserDetails'
import { VictoryLine, VictoryBar } from 'victory'
import query from '../queries/UserResponseSparkline'
import { graphql } from 'react-apollo'
import { LineChart, Line, YAxis } from 'recharts'

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
    const { user } = this.props
    const { textResponses } = this.props.data
    console.log(this.props.data)

    const data = textResponses

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{user.name}</Typography>
            <div>
              <LineChart width={250} height={30} data={data}>
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </ExpansionPanelSummary>
          {this.state.edit ? (
            <UserForm user={user} toggleEdit={this.toggleEdit} />
          ) : (
            <UserDetails user={user} toggleEdit={this.toggleEdit} />
          )}
        </ExpansionPanel>
      </div>
    )
  }
}

export default graphql(query, {
  options: ownProps => ({ variables: { userSlackId: ownProps.user.slackId } }),
})(UserPanel)
