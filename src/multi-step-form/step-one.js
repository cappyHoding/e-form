/* eslint-disable */
import { useState } from "react";

const stepOne = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
    }

    return (
        <div>
            <div className="row">
                <div className="six columns">
                    <label>First Name</label>
                    <input
                        className="u-full-width"
                        placeholder="First Name"
                        type="text"
                        onChange={handleFirstName}
                        value={firstName}
                        autoFocus
                    />
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label>Last Name</label>
                    <input
                        className="u-full-width"
                        placeholder="Last Name"
                        type="text"
                        onChange={handleLastName}
                        value={lastName}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    )
}

export default stepOne;