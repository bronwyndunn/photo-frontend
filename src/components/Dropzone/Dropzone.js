import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

<<<<<<< HEAD
const Dropzone = (props) => {
  const maxSize = 1048576

  const onDrop = useCallback(acceptedFiles => {
    props.getAcceptedFiles(acceptedFiles)
=======
const Dropzone = () => {
  const maxSize = 1048576

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
>>>>>>> f77a9182ef7e71d4fe7351d9e664c3bddf10ba9e
  }, [])

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    minSize: 0,
    maxSize
  })

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize

  return (
    <div className="container text-center mt-5">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && 'Click here or drop a file to upload!'}
        {isDragActive && !isDragReject && "Drop it like it's hot!"}
        {isDragReject && "File type not accepted, sorry!"}
        {isFileTooLarge && (
          <div className="text-danger mt-2">
            File is too large.
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropzone
