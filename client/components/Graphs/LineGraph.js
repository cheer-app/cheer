import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';
import { graphql } from 'react-apollo';
import query from '../../queries/Aggregate';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class LineGraph extends Component {
  constructor() {
    super();
    this.state = {
      month: '',
      open: false,
    };
  }

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
    console.log(this.state.month);
    const { aggregate } = this.props.data;
    const { classes } = this.props;

    if (aggregate) {
      const convertTime = time => {
        let date = new Date(null);
        date.setSeconds(time);
        return date.toString().slice(4, 10);
      };

      const data = aggregate
        .map(elem => ({
          x: convertTime(elem.date),
          y: elem.score,
          z: +convertTime(elem.date).slice(4),
        }))
        .filter(elem => elem.x.includes(this.state.month || 'Jan'))
        .sort((a, b) => a.z - b.z)
        .map(elem => ({
          x: elem.x,
          y: elem.y,
        }));

      return (
        <div>
          <h5 style={{ fontWeight: 700 }}>Company Sentiment For</h5>
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Month
              </InputLabel>
              <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.month}
                onChange={this.handleChange}
                inputProps={{
                  name: 'month',
                  id: 'demo-controlled-open-select',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Jan">Jan</MenuItem>
                <MenuItem value="Feb">Feb</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
          </form>
          <VictoryChart width={1000} height={550} theme={VictoryTheme.material}>
            <VictoryLine
              animate={{
                duration: 2000,
                onLoad: { duration: 2000 },
              }}
              domain={{ y: [-1, 1] }}
              style={{
                data: { stroke: '#c43a31' },
                parent: { border: '2px solid #ccc' },
              }}
              data={data}
            />
            <VictoryLabel text="Date" x={970} y={270} />
            <VictoryLabel text="Sentiment" x={0} y={20} />
          </VictoryChart>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(graphql(query)(LineGraph));
