import React from 'react'
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

import useStyles from '../../shared/styles'

const NavBar = props => {
  const classes = useStyles()
  console.log(`in NavBar: ${classes}`)
  console.log(classes)

  // TODO: not sure if I want position static on AppBar
  return(
    <div>
      <AppBar position="fixed" className={classes.navBar__appBar}> 
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.navBar__menuButton} 
            color="inherit" 
            aria-label="menu" 
            onClick={props.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.navBar__title}>
            Wowel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar