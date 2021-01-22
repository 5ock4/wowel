import React from 'react'
import styles from '../DropzoneStyles';
import NavBar from "./NavBar";
import ResponsiveDrawer from "./ResponsiveDrawer"
import useStyles from '../../shared/styles'


const MainNavigation = props => {
  const classes = useStyles()
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  // TODO: some stuff should be probably added then to App.js (see material-ui responsive Drawer doc)
  return (
    <div> 
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </div>
  )
}

export default MainNavigation