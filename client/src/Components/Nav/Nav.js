import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  root: {
    width: '100%',
    backgroundColor: '#eee',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -5,
    marginRight: 20,
  },
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      auth: true,
      anchorEl: null,
    };

    this.toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };

    this.handleChange = (event, checked) => {
      this.setState({ auth: checked });
    };

    this.handleMenu = event => this.setState({ anchorEl: event.currentTarget });
    this.handleClose = () => {
      this.setState({ anchorEl: null });
    };
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer('left', true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/">Home</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/portfolio">Portfolio</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/software">Software</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/thoughts">Thoughts</Link>
                  </MenuItem>
                </div>
              </Drawer>
            </div>
            <Typography type="title" color="inherit" className={classes.flex}>
              Ömer Mindivanli M.Sc
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
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
                  <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
