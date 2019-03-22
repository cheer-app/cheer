import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
  },
}

class Header extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null,
    }
    this.onLogoutClick = this.onLogoutClick.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }],
    })
    this.handleClose()
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { loading, user } = this.props.data
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    if (loading) {
      return <div />
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cheer
            </Typography>
            {!user ? (
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            ) : (
              <div>
                <IconButton
                  onClick={this.handleMenu.bind(this)}
                  className={classes.menuButton}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.onLogoutClick}>Logout</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(graphql(mutation)(graphql(query)(Header)))
