import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }],
    })
  }

  renderButtons() {
    const { loading, user } = this.props.data

    if (loading) {
      return <div />
    }

    if (user) {
      return (
        <div>
          <IconButton
          // aria-owns={open ? 'menu-appbar' : undefined}
          // aria-haspopup="true"
          // onClick={this.handleMenu}
          // color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            // anchorEl={anchorEl}
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
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
          </Menu>
        </div>
      )
    } else {
      return (
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(graphql(query)(Header))
