import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sidelist: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'gray',
  },
  selected: {
    backgroundColor: 'rgb(220, 220, 220)',
  }
};

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      left: false,
      ind: 0,
    };
  }
  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  toggleList = (num) => () => {
    this.setState({
      ind: num,
    });
  }

  render () {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/" className={classes.sidelist} onClick={this.toggleList(0)}>
            <ListItem button className={this.state.ind === 0 ? classes.selected : ''}>
              <ListItemText disableTypography primary="Home" />
            </ListItem>
          </Link>
          <Link to="/research" className={classes.sidelist} onClick={this.toggleList(1)}>
            <ListItem button className={this.state.ind === 1 ? classes.selected : ''}>
              <ListItemText disableTypography primary="Research" />
            </ListItem>
          </Link>
          <Link to="/web_development" className={classes.sidelist} onClick={this.toggleList(2)}>
            <ListItem button className={this.state.ind === 2 ? classes.selected : ''}>
              <ListItemText disableTypography primary="Web Development" />
            </ListItem>
          </Link>
          <Link to="/bachelor" className={classes.sidelist} onClick={this.toggleList(3)}>
            <ListItem button className={this.state.ind === 3 ? classes.selected : ''}>
              <ListItemText disableTypography primary="Bachelor" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="relative" color="inherit">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <strong>
              <Link to="/" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', }}>Kengo Shimizu</Link>
            </strong>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);