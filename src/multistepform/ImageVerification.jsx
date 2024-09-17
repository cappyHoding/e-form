/* eslint-disable */

import { useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import icon from "./selfie-svgrepo-com.svg"

const FACING_MODE_USER = "user"
const FACING_MODE_ENVIRONMENT = "environment"
const videoConstraints = {
    facingMode: FACING_MODE_USER
}

const ImageVerification = ({getImage}) => {
    const [selfieImage, setSelfieImage] = useState(null);
    const [readyToPhoto, setReadyToPhoto] = useState(false);
    const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

    const camRef = useRef(null);

    // create a capture function
    const capture = useCallback(async () => {
        const imageSrc = camRef.current.getScreenshot();
        await setSelfieImage(imageSrc);
        getImage(imageSrc);
    }, [camRef]);

    const removePhoto = (input) => (event) => {
        event.preventDefault()
        if (input === "selfie") {
            setSelfieImage(null)
        } else {
            setUploadedImage([])
        }
    }

    const changeCamera = useCallback(() => {
        setFacingMode(
            prevState => prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
        )
    }, [])



    const handleReadyToPhoto = (event) => {
        event.preventDefault();
        setReadyToPhoto(!readyToPhoto);
    }

    return (
        <div className="row justify-content-md-center">
            <div className="justify-content-md-center">
                <h5 className="mb-3">Foto Diri (Selfie)</h5>
                {readyToPhoto ? (
                    <div className="drop-container">
                        {selfieImage ? (
                            <>
                                <div className="row">
                                    <img className="img-ktp" src={selfieImage} alt=""/>
                                </div>
                                <button className="btn btn-outline-danger btn-lg w-20 btn-ktp"
                                        onClick={removePhoto("selfie")}>
                                    <i className="bi bi-repeat"></i>
                                    <span> Ganti Foto</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="row">
                                    <Webcam
                                        height={650}
                                        ref={camRef}
                                        mirrored={true}
                                        screenshotFormat="image/png"
                                        audio={false}
                                        videoConstraints={{...videoConstraints, facingMode}}
                                    />
                                </div>
                                <div className="mb-3">
                                        <button className="btn btn-outline-success btn-lg" onClick={capture} style={{marginRight: 10}}>
                                            <i className="bi bi-camera2"/>
                                        </button>
                                        <button className="btn btn-outline-secondary btn-lg" onClick={changeCamera}>
                                            <i className="bi bi-arrow-repeat" />
                                        </button>
                                </div>
                            </>
                        )

                        }
                    </div>
                ) : (
                    <div className="drop-container" onClick={handleReadyToPhoto}>
                        <div className="row">
                            <img src={icon} height={400} width={400} alt=""/>
                        </div>
                        <div className="mb-3">
                            <p>Klik Disini untuk mengaktifkan Kamera Anda</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageVerification