import {useState} from "react";
import PersonalInformation from "./PersonalInformation";

import "./MultiStepForm.css"
import ApplicationDetail from "./ApplicationDetail";

const MultiStepForm = () => {
    const state = {
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

    const [personalInformation, setPersonalInformation] = useState(state)
    const [step, setStep] = useState(1);

    const handleChange = (input) => (e) => {
        e.preventDefault()
        setPersonalInformation({ ...personalInformation, [input]: e.target.value })
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    return (
        <div className="container border rounded">
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
                    handleChange={handleChange}
                    values={personalInformation}
                />
            }

            {step === 3 &&
                <h4>Foto Diri Dan KTP</h4>
            }

            {step === 4 &&
                <h4>Syarat dan Ketentuan</h4>
            }

            {step >1 && step < 4 &&
                <>
                    <hr className="mb-4"/>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <button type="submit" className="btn btn-outline-warning btn-lg w-100" onClick={prevStep}>
                                Kembali
                            </button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button type="submit" className="btn btn-outline-primary btn-lg w-100" onClick={nextStep}>
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default MultiStepForm;