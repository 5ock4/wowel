import React from 'react'
import NavBar from "./NavBar";
import ResponsiveDrawer from "./ResponsiveDrawer"
import { useStyles } from '../../styles'


const MainNavigation = props => {
  const classes = useStyles()
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleDrawerClose = () => {
    setMobileOpen(false);
  }

  // TODO: some stuff should be probably added then to App.js (see material-ui responsive Drawer doc)
  return (
    <div> 
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <ResponsiveDrawer mobileOpen={mobileOpen} 
                        handleDrawerToggle={handleDrawerToggle} 
                        handleDrawerClose={handleDrawerClose}
      />
    </div>
  )
}

export default MainNavigation