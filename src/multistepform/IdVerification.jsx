/* eslint-disable */

import {forwardRef, useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";

const IdVerification  = ({getIdImage}) => {
    const [idImage, setIdImage] = useState([]);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((acceptedFile) => {
            setIdImage((prevState) => [...prevState, acceptedFile]);
        })
        getIdImage(acceptedFiles)
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({ onDrop, accept: {'image/png' : ['.png']}, maxFiles: 2});

    const removePhoto = (event) => {
        event.preventDefault()
        setIdImage([]);
    }

    return (
        <div className="row justify-content-md-center">
            <div className="mb-3">
                <h5>Foto KTP</h5>
                {idImage.length === 0 ? (
                    <div className="drop-container" {...getRootProps()}>
                        <input {...getInputProps()}/>
                        {isDragActive ? (
                            <span className="drop-title">Upload Foto KTP</span>
                        ): (
                            <p>Seret dan lepas foto KTP di sini, atau klik untuk memilih</p>
                        )}
                    </div>
                ) : (
                    idImage.map((image, i) => (
                        <div className="drop-container">
                            <div className="row">
                                <img className="img-ktp" src={`${URL.createObjectURL(image)}`} key={i} alt=""/>
                            </div>
                            <div className="btn-ktp">
                                <button className="btn btn-outline-danger btn-sm w-20"
                                        onClick={removePhoto}>
                                    <span><i className="bi bi-trash"></i>Ganti Foto</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default IdVerification