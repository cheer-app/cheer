import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class Dropdown extends React.Component {
  state = {
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Month</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Jan</MenuItem>
            <MenuItem value={20}>Feb</MenuItem>
            <MenuItem value={30}>March</MenuItem>
            <MenuItem value={30}>April</MenuItem>
            <MenuItem value={30}>May</MenuItem>
            <MenuItem value={30}>June</MenuItem>
            <MenuItem value={30}>July</MenuItem>
            <MenuItem value={30}>August</MenuItem>
            <MenuItem value={30}>Sept</MenuItem>
            <MenuItem value={30}>Oct</MenuItem>
            <MenuItem value={30}>Nov</MenuItem>
            <MenuItem value={30}>Dec</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

// Dropdown.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Dropdown);
