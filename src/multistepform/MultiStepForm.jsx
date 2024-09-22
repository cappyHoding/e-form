import {useState} from "react";
import PersonalInformation from "./PersonalInformation";

import "./MultiStepForm.css"
import Knowledgement from "./Knowledgement";
import ApplicationDetail from "./ApplicationDetail";
import ImageVerification from "./ImageVerification";
import IdVerification from "./IdVerification";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
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

    const tc = {
        tc1: false,
        tc2: false
    }

    const [agreement, setAgreement] = useState(tc)
    const [step, setStep] = useState(0);
    const [personalInformation, setPersonalInformation] = useState(personalInfoState)
    const [tabunganInfo, setTabunganInfo] = useState(tabunganInfoState)
    const [selfie, setSelfie] = useState(null)
    const [idImage, setIdImage] = useState([])
    // let selfie = "";

    const handleChangeAgreement = (input) => (e) => {
        e.preventDefault()
        setAgreement({...agreement, [input]: !agreement[input] })
    }

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
            <Header />
            <div className="container border rounded">
                {step === 0 &&
                    <div>
                        <Knowledgement
                            handleChange={handleChangeAgreement}
                            values={agreement}
                        />
                        <hr className="mb-4"/>
                        <button type="submit"
                                disabled={!agreement.tc1 && !agreement.tc2}
                                className="btn btn-outline-success btn-lg w-100"
                                onClick={nextStep}>
                            Mulai
                        </button>
                    </div>
                }
                {step === 4 &&
                    <>
                        <PersonalInformation
                            handleChange={handleChange}
                            values={personalInformation}
                        />
                    </>

                }
                {step === 1 &&
                    <>
                        <ApplicationDetail
                            handleChange={handleChangeTabungan}
                            values={tabunganInfo}
                        />
                        <hr className="mb-4"/>
                        <button type="submit"
                                disabled={!agreement.tc1 && !agreement.tc2}
                                className="btn btn-outline-primary btn-lg w-100"
                                onClick={nextStep}>
                            Selanjutnya
                        </button>
                    </>
                }

                {step === 2 &&
                    <ImageVerification
                        getImage={handleSelfie}
                    />
                }
                {step ===3 &&
                    <IdVerification
                        getIdImage={handleIdImage}
                    />

                }
                {step === 10 &&
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
            <Footer />
        </>
    )
}

export default MultiStepForm;