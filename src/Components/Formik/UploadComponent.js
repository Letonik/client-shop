import React, {useState} from "react";
import {useDropzone} from "react-dropzone";

const UploadComponent = props => {
    const { setFieldValue } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            setFieldValue("files", acceptedFiles);
        }
    });
    return (
        <div style={{border: '1px solid black'}}>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Нажмите на поле или перенесите файл в выделенну область</p>
            </div>
        </div>
    )
}
export default UploadComponent