const styles = {
  baseStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  activeStyle: {
    borderColor: '#2196f3'
  },
  acceptStyle: {
    borderColor: '#00e676'
  },  
  rejectStyle: {
    borderColor: '#ff1744'
  },
}

export default styles