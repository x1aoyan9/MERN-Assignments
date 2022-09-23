import React, { useState } from  'react';

const UserForm = () => {

    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // default value
    // const [errorError, setErrorError] = useState("");

    const createUser = (e) => {
        // prevents the default refresh of the browser to keep state from being reset
        e.preventDefault();
        setfName("");
        setlName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        // setHasBeenSubmitted("");
        // setErrorError("");
    };

    const formStyle = {
        textAlign: "left",
        margin: "2.5% 5%",
    }

    // const fNameError = (e) => {
    //     setfName(e.target.value);
    //     if(e.target.value.length < 2) {
    //         setErrorError("First name must contain at least 2 characters!");
    //     } else {
    //             // an empty string is considered a "falsy" value
    //             setErrorError("");
    //         }
    //     }

    //     const lNameError = (e) => {
    //         setlName(e.target.value);
    //         if(e.target.value.length < 2) {
    //             setErrorError("Last name must contain at least 2 characters!");
    //         } else {
    //             // an empty string is considered a "falsy" value
    //             setErrorError("");
    //         }
    //     }

    //     const emailError = (e) => {
    //         setEmail(e.target.value);
    //         if(e.target.value.length < 2) {
    //             setErrorError("Email must contain at least 2 characters!");
    //         } else {
    //             // an empty string is considered a "falsy" value
    //             setErrorError("");
    //         }
    //     }

    //     const passwordError = (e) => {
    //         setPassword(e.target.value);
    //         if(e.target.value.length < 8) {
    //             setErrorError("Password must contain at least 8 characters!");
    //         } else {
    //             // an empty string is considered a "falsy" value
    //             setErrorError("");
    //         }
    //     }

    //     const confirmPassError = (e) => {
    //         setConfirmPass(e.target.value);
    //         if(e.target.value.equal(setPassword)) {
    //             setErrorError("Passwords do not match!");
    //         } else {
    //             // an empty string is considered a "falsy" value
    //             setErrorError("");
    //         }
    //     }

    return(
        <>
            <div className="user-form" style={formStyle}>
                <form onSubmit={createUser}>
                    {/*{ hasBeenSubmitted ?
                        <h2>Thank you for submitting the form!</h2>:
                        <h2>Welcome, please submit the form.</h2>
                    }*/}
                    <h3>Register</h3>
                    <div>
                        <label>First Name: </label>
                        <input type="text" value={fname} onChange={(e) => setfName(e.target.value)} />
                        {/*{ errorError ?<p>{ errorError }</p> :''}*/}
                        <div style={{color:"red"}}><strong>
                            {
                                fname.length < 2 && fname.length > 0 ? (
                                    <p>First name must be at least 2 characters.</p>
                                ) : null
                            }
                        </strong></div>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={lname} onChange={(e) => setlName(e.target.value)} />
                        {/*{ errorError ?<p>{ errorError }</p> :''}*/}
                        <div style={{color:"red"}}><strong>
                            {
                                lname.length < 2 && lname.length > 0 ? (
                                    <p>Last name must be at least 2 characters.</p>
                                ) : null
                            }
                        </strong></div>
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {/*{ errorError ?<p>{ errorError }</p> :''}*/}
                        <div style={{color:"red"}}><strong>
                            {
                                email.length < 5 && email.length > 0 ? (
                                    <p>Email must be at least 5 characters.</p>
                                ) : null
                            }
                        </strong></div>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/*{ errorError ?<p>{ errorError }</p> :''}*/}
                        <div style={{color:"red"}}><strong>
                            {
                                password.length < 8 && password.length > 0 ? (
                                    <p>Password must be at least 8 characters.</p>
                                ) : null
                            }
                        </strong></div>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                        {/*{ errorError ?<p>{ errorError }</p> :''}*/}
                        <div style={{color:"red"}}><strong>
                            {
                                confirmPass !== password ? (
                                    <p>Passwords do not match!</p>
                                ) : null
                            }
                        </strong></div>
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>

            <br />

            <div className="form-display" style={formStyle}>
                <div>
                    <strong>Your Form Data</strong>
                </div>
                <div>
                    First Name: {fname}
                </div>
                <div>
                    Last Name: {lname}
                </div>
                <div>
                    Email: {email}
                </div>
                <div>
                    Password: {password}
                </div>
                <div>
                    Confirm Password: {confirmPass}
                </div>
            </div>
        </>
    );
};

export default UserForm;