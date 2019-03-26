import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UserForm from './UserForm'
import UserDetails from './UserDetails'
import { VictoryChart, VictoryLine } from 'victory'

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
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.name}</Typography>
          <VictoryLine
            height={25}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
        </ExpansionPanelSummary>
        {this.state.edit ? (
          <UserForm user={user} toggleEdit={this.toggleEdit} />
        ) : (
          <UserDetails user={user} toggleEdit={this.toggleEdit} />
        )}
      </ExpansionPanel>
    )
  }
}

export default UserPanel
