import React from "react";
import Container from '@material-ui/core/Container'
import Dropzone from "./components/Dropzone";
import MainNavigation from "./components/Navigation/MainNavigation"
import useStyles from './shared/styles'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme'

const App = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={{ ...theme}}>
      <MainNavigation />
      <main><Dropzone /></main>
    </ThemeProvider>
  )
}

export default App;
