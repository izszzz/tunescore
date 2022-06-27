import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import * as Routes from "../../rails-routes.js"
import Layout from './Layout.js';
import Link from '@mui/material/Link';
import { GonContext } from "../../contexts/Gon"

export default function Header() {
  const gon = useContext(GonContext)
  const [currentUser, setCurrentUser] = useState<schema.User | null>(null)
  useEffect(() => {
    setCurrentUser(gon?.currentUser || null);
  }, [gon])

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
        <form action={Routes.destroy_user_session_path()} method="post">
          <input type="hidden" name="_method" value="delete" />
          <Button type="submit" color="inherit" >SignOut</Button>
          <input type="hidden" name="authenticity_token" value={gon?.authenticity_token} />
        </form>
        :
        <>
          <Button color="inherit" href={Routes.new_user_registration_path()} >SignUp</Button>
          <Button color="inherit" href={Routes.new_user_session_path()}>SignIn</Button>
        </>
      }
    </Layout>
  );
}
