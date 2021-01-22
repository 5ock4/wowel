import { makeStyles } from "@material-ui/core/styles";

// TODO: make this global somewhere (also from NavBarStyles)
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  responsiveDrawer__drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navBar__menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  responsiveDrawer__toolbar: theme.mixins.toolbar,
  responsiveDrawer__drawerPaper: {
    width: drawerWidth,
  },
}))

export default useStyles