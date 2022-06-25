import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import * as Routes from "../../rails-routes.js"
import Layout from './Layout.js';
import Link from '@mui/material/Link';

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    setCurrentUser(window.gon.currentUser)
  }, [])

  return (
    <Layout>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component={Link} href={Routes.root_path()} sx={{ flexGrow: 1 }}>
        TuneScore
      </Typography>
      {currentUser ?
        <Button color="inherit" href={Routes.destroy_user_session_path()} data-turbo-method="delete" data-turbo="true">SignOut</Button>
        :
        <>
          <Button color="inherit" href={Routes.new_user_registration_path()} >SignUp</Button>
          <Button color="inherit" href={Routes.new_user_session_path()}>SignIn</Button>
        </>
      }
    </Layout>
  );
}
