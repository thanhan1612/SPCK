import React from "react";
import IconPassword from "../Icons/IconPasswordeye";
import IconFacebookreal from "../Icons/IconFacebookreal";
import IconGooglereal from "../Icons/IconGooglereal";
import IconForward from "../Icons/IconForward";
import './LoginPage.css';
const LoginPage = () => {
    return (
        <div className="loginpage">
       
            
            <form>
                <h1>Login to Continue</h1>
                <div className="inputs">
                    <input placeholder="E-Mail" />
                    <div className="password">
                        <input placeholder="Password"  />
                        <i><IconPassword /></i>
                    </div>
                    <div className="forgotpass">
                        <button className="forgot">Forgot Password <span className="forwardclass"><IconForward /></span> </button>
                        <button className="islogin">Login</button>
                    </div>
                    <div className="fbgglogin">
                        <div className="fb">
                         <button className="fblogin"> <span><IconFacebookreal /></span>Facebook Login </button>
                        
                        </div>
                        <div className="gg">
                         <button className="gglogin"> <span><IconGooglereal /></span>Google Login </button>
                       
                        </div>
                        
                    </div>
                    <div className="bigsignupnow">
                         <div className="signupnow">
                              <h3>Don't have an account</h3>
                             <p>Sign up here</p>
                         </div>
                         <button className="signupbutton1">Sign up </button>
                    </div>
                    
                    
                </div>
                
            </form>
        </div>
    )
}
export default LoginPage;