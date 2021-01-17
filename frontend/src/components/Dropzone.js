import React, { useMemo, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import Typography from "@material-ui/core/Typography"
import styles from "./DropzoneStyles"
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const Dropzone = () => {

  useEffect(() => { console.log(process.env.REACT_APP_BACKEND_URL)}) //TODO: what is this? Probably to delete

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {

      let reader = new FileReader()

      reader.onload = (e) => {
        let data = e.target.result;
        axios.post(process.env.REACT_APP_BACKEND_URL, {text: data})
                 .then(function (response) {
                   console.log(response)
                 })
                 .catch(function (error) {
                   console.log(error)
                 })
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

export default Dropzone
