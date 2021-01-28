import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { Typography, Container } from '@material-ui/core'
import Dropzone from "./_upload/pages/Dropzone";
import Browse from "./_browse/pages/Browse"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import { useStyles as useStylesShared } from './shared/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './shared/theme'

const App = () => {
  const classes = useStylesShared()
  console.log("In app")
  console.log(classes)

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Dropzone />
      </Route>
      <Route path="/detail" exact>
        <Typography>Detail page</Typography>
      </Route>
      <Route path="/browse" exact>
        <Browse/>
      </Route>
      <Redirect to="/" /> 
    </Switch>
  )

  return (
    <ThemeProvider theme={{ ...theme}}>
        <Router>
          <MainNavigation />
            <div className={classes.contentContainer}>
              <Container>
                {routes}
              </Container>
            </div>
        </Router>
    </ThemeProvider>
  )
}

export default App;
