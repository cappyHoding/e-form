/* eslint-disable */
import { useState } from "react";

const stepThree = () => {
    const [isAgree, setAgree] = useState(false);

    const handleIsAgreeChange = (event) => {
        event.preventDefault();
        setAgree(!isAgree);
    }

    return (
        <div>
            <div className="row">
                <div className="ten columns terms">
                    <span>By Clicking "Agree" I Agree That:</span>
                    <ul className="docs-term">
                        <li>
                            I Have Read and Accepted the <a href="#!">User Agreement</a>
                        </li>
                        <li>
                            I Have Read and Accepted the <a href="#!">Privacy Policy</a>
                        </li>
                    </ul>
                    <label>
                        <input
                            type="checkbox"
                            checked={isAgree}
                            onChange={handleIsAgreeChange}
                            autoFocus
                        />
                        <span>AGREE</span>{" "}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default stepThree;