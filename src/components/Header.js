import React from 'react';
import {AppBar, Toolbar, Typography , Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



const Header = () => {
	 
	return (
			 <div >
		     <AppBar position="static">
		        <Toolbar>
		          <IconButton edge="start"  color="inherit" aria-label="menu">
		            <MenuIcon />
		          </IconButton>
		          <Typography variant="h6" >
		            News
		          </Typography>
		          <Button color="inherit">Login</Button>
		        </Toolbar>
		      </AppBar>
		     
   			 </div>
		)
}

export default Header;
