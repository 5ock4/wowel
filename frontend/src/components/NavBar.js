import React from 'react'
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

import useStyles from '../shared/styles'

const NavBar = () => {
  const classes = useStyles()
  console.log(`in NavBar: ${classes}`)
  console.log(classes)

  // TODO: not sure if I want position static on AppBar
  return(
    <div>
      <AppBar /*position="static"*/ className={classes.appBar}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Wowel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar