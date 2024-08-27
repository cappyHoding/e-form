/* eslint-disable */

import MultiStep from "react-multistep";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";

import "./prog-track.css"
import "./styles.css"

const multiStepForm = () => {
   const steps = [
       {name: "Name", component: <StepOne />},
       {name: "Email", component: <StepTwo />},
       {name: "Agreement", component: <StepThree />},
   ]

    return (
        <div className="col-md-6 offset-md-3">
            <MultiStep steps={steps}/>
        </div>
    )
}

export default multiStepForm;