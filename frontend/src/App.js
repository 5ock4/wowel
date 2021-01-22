import React from "react";
import Container from '@material-ui/core/Container'
import Dropzone from "./components/Dropzone";
import MainNavigation from "./components/Navigation/MainNavigation"
import useStyles from './shared/styles'

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <MainNavigation />
      <main><Dropzone /></main>
    </div>
  )
}

export default App;
