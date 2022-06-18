import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
    setCurrentUser(window.gon.currentUser)
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TuneScore
          </Typography>
          {currentUser ?
              <Button color="inherit" href="/users/sign_out" data-turbo-method="delete">SignOut</Button>
            :
            <>
              <Button color="inherit" href="/users/sign_up">SignUp</Button>
              <Button color="inherit" href="/users/sign_in">SignIn</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
