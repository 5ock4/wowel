import React, { useMemo, useCallback, setState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./DropzoneStyles";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';

function Dropzone(props) {

  useEffect(() => { console.log(process.env.REACT_APP_BACKEND_URL)})
  // const classes = useStyles(props);
  // TODO: move the styles to separate file - make it work
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "200px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {

      console.log('file:');
      console.log(file);

      axios.post(process.env.REACT_APP_BACKEND_URL)

      axios.post('/api', file)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop }); //{accept: 'image/*'}, TODO: make it work with only *.xlsx filetype

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  // TODO: check why it is called so many times and why is it always 1

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography>
          Drag 'n' drop some files here, or click to select files
        </Typography>
      </div>
      <aside>
        <Typography variant="subtitle1">Files</Typography>
      </aside>
    </section>
  );
}

export default Dropzone;
