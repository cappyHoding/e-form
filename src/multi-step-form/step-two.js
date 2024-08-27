/* eslint-disable */

import { useState } from "react";

const stepTwo = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }
    const handleRepeatPasswordChange = (event) => {
        event.preventDefault()
        setRepeatPassword(event.target.value)
    }

    return (
        <div>
            <div className="row">
                <div className="six columns">
                    <label>Email</label>
                    <input
                        className="u-full-width"
                        placeholder="Email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        autoFocus
                    />
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label>Password</label>
                    <input
                        className="u-full-width"
                        placeholder="Password"
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label>Confirm Password</label>
                    <input
                        className="u-full-width"
                        placeholder="Confirm Password"
                        type="password"
                        onChange={handleRepeatPasswordChange}
                        value={repeatPassword}
                    />
                </div>
            </div>
        </div>
    )
}

export default stepTwo;