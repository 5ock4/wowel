import React, { useMemo, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import Typography from "@material-ui/core/Typography"
import Container from '@material-ui/core/Container'
import styles from "./DropzoneStyles"
import axios from 'axios'

import { useStyles } from '../../shared/styles'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const Dropzone = () => {

  // const classes = useStyles()
  useEffect(() => { console.log(process.env.REACT_APP_BACKEND_URL)}) //TODO: what is this? Probably to delete

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {

      let reader = new FileReader()

      reader.onload = (event) => {
        let data = event.target.result;
        axios.post(process.env.REACT_APP_BACKEND_URL, {text: data})
                 .then((response) => console.log(response))
                 .catch((error) => console.log(error))
      }
      reader.readAsBinaryString(file)

    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop }) //{accept: 'image/*'}, TODO: make it work with only *.xlsx filetype

  const style = useMemo(
    () => ({
      ...styles.baseStyle,
      ...(isDragActive ? styles.activeStyle : {}),
      ...(isDragAccept ? styles.acceptStyle : {}),
      ...(isDragReject ? styles.rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  )
  // TODO: check why it is called so many times and why is it always 1

  return (
    <React.Fragment>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography>
          Drag 'n' drop some files here, or click to select files
        </Typography>
      </div>
      <aside>
        <Typography variant="subtitle1">File: </Typography>
      </aside>
    </React.Fragment>
  );
}

export default Dropzone
