import React, { useState } from  'react';

const UserForm = (props) => {

    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        // prevents the default refresh of the browser to keep state from being reset
        e.preventDefault();
        console.log(props);
    };

    const formStyle = {
        textAlign: "left",
        margin: "2.5% 5%",
    }

    return(
        <>
            <div className="user-form" style={formStyle}>
                <form onSubmit={createUser}>
                    <h1>New User</h1>
                    <div>
                        <label>First Name: </label>
                        <input type="text" value={fname} onChange={(e) => setfName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={lname} onChange={(e) => setlName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    </div>
                    {/* <input type="submit" value="Create User" /> */}
                </form>
            </div>
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