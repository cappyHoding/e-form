import {forwardRef, useCallback, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import Webcam from "react-webcam";

const ImageVerification = forwardRef((props, ref) => {
    const [uploadedImage, setUploadedImage] = useState([]);
    const [selfieImage, setSelfieImage] = useState(null);
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((acceptedFile) => {
            setUploadedImage((prevState) => [...prevState, acceptedFile]);
        });
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({ onDrop, accept: "image/*", maxFiles: 2});

    const removePhoto = (input) => (event) => {
        event.preventDefault()
        if (input === "selfie") {
            setSelfieImage(null)
        } else {
            setUploadedImage([])
        }
    }

    const camRef = useRef(null);

    // create a capture function
    const capture = useCallback(() => {
        const imageSrc = camRef.current.getScreenshot();
        setSelfieImage(imageSrc);
    }, [camRef]);

    return (
        <div className="row justify-content-md-center">
            <div className="mb-3">
                <h5 className="mb-3">Foto Diri (Selfie)</h5>
                <div className="drop-container">
                    {selfieImage ? (
                        <>
                            <div className="row">
                                <img className="img-ktp" src={selfieImage} alt=""/>
                            </div>
                            <button className="btn btn-outline-danger btn-lg w-20" onClick={removePhoto("selfie")}>Ganti
                                Foto
                            </button>
                        </>
                    ) : (
                        <>
                            <Webcam width={300} height={300} ref={camRef} mirrored={true} />
                            <button className="btn btn-outline-success" onClick={capture}>Capture photo</button>
                        </>
                    )

                    }
                </div>

            </div>

            <div className="mb-3">
                <h5 className="mb-3">Foto KTP</h5>
                {uploadedImage.length === 0 &&
                    <div className="drop-container" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <span className="drop-title">Upload Foto KTP</span>
                        ) : (
                            <p>Drag and drop file(s) here, or click to select files</p>
                        )}
                    </div>
                }
                {uploadedImage.length > 0 &&
                    uploadedImage.map((image, i) => (
                        <div className="drop-container">
                            <div className="row">
                                <img className="img-ktp"
                                     src={`${URL.createObjectURL(image)}`} key={i} alt=""/>
                            </div>
                            <button className="btn btn-outline-danger btn-lg w-20" onClick={removePhoto("ktp")}>Ganti Foto</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default ImageVerification