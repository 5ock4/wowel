import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
  title: {
    flexGrow: 1,
  },
  dropzoneBase: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  dropzoneActive: {
    borderColor: '#2196f3'
  },
  dropzoneAccept: {
    borderColor: '#00e676'
  },  
  dropzoneReject: {
    borderColor: '#ff1744'
  },
});

export { useStyles };
