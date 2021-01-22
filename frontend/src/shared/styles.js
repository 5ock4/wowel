import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

// TODO: maybe won't be needed at all in future
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dropzone__contentContainer: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
}))

export default useStyles