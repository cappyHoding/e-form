import {useState} from "react";
import PersonalInformation from "./PersonalInformation";

import "./MultiStepForm.css"

const MultiStepForm = () => {
    const state = {
        step :1,
        fullName: '',
        idNumber: '',
        gender: '',
        pob: '',
        dob: '',
        address: '',
        postCode: '',
        phoneNumber: '',
        email: '',
        motherName: ''
    }

    const [personalInformation, setPersonalInformation] = useState(state)

    const handleChange = (input) => (e) => {
        e.preventDefault()
        setPersonalInformation({ ...personalInformation, [input]: e.target.value })
    }

    const prevStep = () => {
        // let curStep = personalInformation['step']
        // setPersonalInformation({...personalInformation, ['step']: curStep-1})
    }

    const nextStep = () => {
        // let curStep = personalInformation['step']
        // setPersonalInformation({...personalInformation, ['step']: curStep+1})
    }

    return (
        <div className="container border rounded">
            <div className="py-5 text-center">
                <h2>Formulir Pembukaan Tabungan</h2>
                <hr/>
            </div>

            <PersonalInformation
                prevStep={prevStep()}
                nextStep={nextStep()}
                handleChange={handleChange}
                value={state}
            />
        </div>
    )
}

export default MultiStepForm;