import {useState} from "react";
import PersonalInformation from "./PersonalInformation";

import "./MultiStepForm.css"
import ApplicationDetail from "./ApplicationDetail";
import ImageVerification from "./ImageVerification";
import IdVerification from "./IdVerification";

const MultiStepForm = () => {
    const personalInfoState = {
        fullName: '',
        idNumber: '',
        gender: '',
        pob: '',
        dob: '',
        address: '',
        postCode: '',
        occupation: '',
        phoneNumber: '',
        email: '',
        motherName: ''
    }

    const tabunganInfoState = {
        nominal: 0,
        productTypes: ''
    }


    const [step, setStep] = useState(1);
    const [personalInformation, setPersonalInformation] = useState(personalInfoState)
    const [tabunganInfo, setTabunganInfo] = useState(tabunganInfoState)
    const [selfie, setSelfie] = useState(null)
    const [idImage, setIdImage] = useState([])
    // let selfie = "";

    const handleChange = (input) => (e) => {
        e.preventDefault()
        setPersonalInformation({ ...personalInformation, [input]: e.target.value })
    }

    const handleChangeTabungan = (input) => (e) => {
        e.preventDefault()
        setTabunganInfo({ ...tabunganInfo, [input]: e.target.value })
    }

    const handleSelfie = async (image) => {
        setSelfie(image)
        buildRequest()
    }

    const handleIdImage = (e) => {
        console.log(e)
        // setIdImage(e.target.value)
        // console.log(e.target.value)
    }

    const buildRequest = () => {
        console.log(selfie)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    return (
        <>
            <div className="container border rounded" style={{background: '#ffffff'}}>
                <div className="py-5 text-center">
                    <h2>Formulir Pembukaan Tabungan</h2>
                    <hr/>
                </div>
                {step === 1 &&
                    <>
                        <PersonalInformation
                            handleChange={handleChange}
                            values={personalInformation}
                        />
                        <hr className="mb-4"/>
                        <button type="submit" className="btn btn-outline-primary btn-lg w-100" onClick={nextStep}>
                            Selanjutnya
                        </button>
                    </>

                }
                {step === 2 &&
                    <ApplicationDetail
                        handleChange={handleChangeTabungan}
                        values={tabunganInfo}
                    />
                }

                {step === 3 &&
                    <ImageVerification
                        getImage={handleSelfie}
                    />
                }
                {step ===4 &&
                    <IdVerification
                        getIdImage={handleIdImage}
                    />

                }
                {step === 5 &&
                    <div>
                        <button type="submit" className="btn btn-outline-secondary btn-lg w-100"
                                onClick={prevStep}>
                            Kembali
                        </button>
                    </div>
                }

                {step > 1 && step < 5 &&
                    <>
                        <hr className="mb-4"/>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button type="submit" className="btn btn-outline-secondary btn-lg w-100"
                                        onClick={prevStep}>
                                    Kembali
                                </button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button type="submit" className="btn btn-outline-primary btn-lg w-100"
                                        onClick={nextStep}>
                                    Selanjutnya
                                </button>
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default MultiStepForm;