import React from "react";
import IconPassword from "../Icons/IconPasswordeye";
import IconGoback from "../Icons/IconGoback";
import './SignUp.css';
const SignUp = () => {
    return (
        <div className="loginpage">
            
            
            <form className="form">
                <span><IconGoback /></span>
                <h1>Sign up to Continue</h1>
                <div className="inputs">
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <div className="password">
                        <input placeholder="Password"  />
                        <i><IconPassword /></i>
                    </div>
                    <div className="password">
                        <input placeholder="Phone number"  />
                        <i><IconPassword /></i>
                    </div>
                    <button className="createanaccount">Create an account</button>
                    
                </div>
            
                
            </form>
        </div>
    )
}
export default SignUp;