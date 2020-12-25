import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './DropzoneStyles'

const NavBar = () => {
  const classes = useStyles();

  return(
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Wowel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;