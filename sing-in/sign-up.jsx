import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './sign-up.css'
import { Validator } from "validator";

const Signup =() => {
    let navigate = useNavigate()
    const [ signupData, setSignupData] = useState({email: "", password:"" , confirmpassword:""})
    const handleSignup = () => {
        if(signupData.password === signupData.confirmpassword && signupData.password.length>0 && signupData.email.length>0 && (validator.isEmail(signupData.email))){
            axios({
                method: "POST",
                data: signupData,

            }).then((res) =>{
                alert(res.data)
                navigate("/")
            }).catch((err) =>{
                alert(err.response.data)
            })

        }else{
            if(signupData.email.length === 0){
                alert("email cannot be empty");

            }else if (!validator.isEmail(signupData.email)){
                alert("email is not valid")

            }else if (signupData.password.length === 0){
                alert("password cannnot be empty")

            }else {
                alert("password and confirm password should be same")
            }
        }
    }
    const naviSignin =() =>{
        navigate("/")
    }
    return(
        <div className="signupcontainer">
            <div className="box">
                <p className="para">Create New Account</p>
                <div id ="email">
                    <input className="signup-input" type="email"required placeholder="email ID" onChange={(e) =>{ setSignupData({...signupData,email:e.target.value}) }}/>

                </div>
                <div id="password">
                    <input className="signup-input" type="email" required placeholder="Email ID" onChange={(e) =>{ setSignupData({...signupData, password:e.target.value}) }}/>

                </div>
                <div id="confirmpassword">
                    <input className="signup-input" type="password" required placeholder="password" id="confirm password" onChange={(e) => { setSignupData({...signupData,confirmpassword:e.target.value})}}/>
                </div>
                <button className="sign" onClick={() =>{ handleSignup()}}>Sign up</button>
            </div>
            <p className="foot" onClick={naviSignin}>Sign up</p>
        </div>
    )
}
export default Signup