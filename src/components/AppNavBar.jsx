import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import logo from './../logo.png';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },
});
class AppNavBar extends Component {


  render () {
  
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="white">
          <Toolbar>
          <img src={logo}  alt="logo" width="30px" height="30px" />

            <Typography variant="title" className={classes.menuButton}
              color="inherit">
              
           </Typography>

            <Typography variant="h6" className={classes.title}>
              Covid19 Tracker
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default withStyles(useStyles)(AppNavBar)