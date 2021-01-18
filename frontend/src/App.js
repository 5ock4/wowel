import React from "react";
import NavBar from "./components/NavBar";
import Dropzone from "./components/Dropzone";
import ResponsiveDrawer from "./components/Drawer"

const App = () => {

  return (
    <div>
      <NavBar />
      <ResponsiveDrawer />
      <Dropzone />
    </div>
  )
}

export default App;
