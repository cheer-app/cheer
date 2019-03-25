import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  Divider,
} from '@material-ui/core'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   name: this.props.user.name,
    //   email: this.props.user.email,
    //   slackId: this.props.user.slackid,
    //   isAdmin: this.props.user.isAdmin,
    // }
    this.handleChange = this.handleChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleChange(event) {
    console.log('before', this.state)
    this.setState({ [event.target.id]: event.target.value })
    console.log('after', this.state)
  }

  handleSwitch() {
    console.log('before', this.state)
    this.setState({ isAdmin: !this.state.isAdmin })
    console.log('after', this.state)
  }

  render() {
    return <div>PENDING</div>
  }
}

// {/* <ExpansionPanelDetails>
//   <form>
//     <TextField
//       id="name"
//       label="Name"
//       value={this.state.name}
//       onChange={this.handleChange}
//       variant="outlined"
//     />
//     <TextField
//       id="email"
//       label="Email"
//       value={this.state.email}
//       onChange={this.handleChange}
//       variant="outlined"
//     />
//     <TextField
//       id="slackId"
//       label="Slack ID"
//       value={this.state.slackId}
//       onChange={this.handleChange}
//       variant="outlined"
//     />
//     <FormControl>
//       <FormControlLabel
//         id="isAdmin"
//         control={<Switch checked={this.state.isAdmin} />}
//         onChange={this.handleSwitch}
//         labelPlacement="start"
//         label="Admin"
//       />
//     </FormControl>
//   </form>
// </ExpansionPanelDetails>
// <Divider />
// <ExpansionPanelActions>
//   <Button size="small" onClick={this.props.toggleEdit}>
//     Cancel
//   </Button>
//   <Button size="small" color="primary">
//     Save
//   </Button>
// </ExpansionPanelActions>
// </div> */}

export default QuestionForm
