import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {  Link } from 'react-router-dom';

const Header = () => {
  return <div>

<AppBar position='static'>
   <Toolbar>

       <Typography variant='h5'> ICT Academy</Typography>

       <Link to="/"  style={{margin:10}}> <Typography style={{color:"#ffffff"}}>Books Entry</Typography> </Link>
      
      
       <Link to="/view" style={{margin:10}}> <Typography style={{color:"#ffffff"}}>View Books </Typography> </Link>

 </Toolbar> 
</AppBar>

  </div>;
};

export default Header;
