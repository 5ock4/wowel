import React from 'react'
import NavBar from "./NavBar";
import ResponsiveDrawer from "./ResponsiveDrawer"

const MainNavigation = props => {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div>
      <NavBar handleDrawerToggle={handleDrawerToggle}/>
      <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </div>
  )
}

export default MainNavigation