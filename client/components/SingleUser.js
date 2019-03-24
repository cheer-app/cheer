import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Divider,
  Button,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import SingleUserDetails from './SingleUserDetails'
import SingleUserForm from './SingleUserForm'

class SingleUser extends Component {
  render() {
    const { user } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SingleUserForm user={user} />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Edit</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}

export default SingleUser
