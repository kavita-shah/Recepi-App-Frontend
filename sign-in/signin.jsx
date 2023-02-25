import axios from "axios";
import { userState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import "./Signin.css"

const Signin =() =>{

    const [visibility, setVisibility] = useState(false);

    const toggleBtn=() =>{

        const naviSignup =() =>{
            Navigate("/signup")
        }
        const [ signindata, setSignindata] =useState({ email:"", password:""})
        const handleLogin =() =>{
            if(signindata.email.length){
                axios({
                    
                    method:"POST",
                    headers:{

                    },
                    data: signindata
                }).then((data) => {
                    console.log(data.data)
                    if(data.data.token.length>0){
                        localStorage.setItem("authorization", data.data.token);
                        localStorage.setItem('userid', signindata.email)
                        alert('${signindata.email} signed in succesfully')
                        Navigate("/listproperty")
                    }

                }).catch((err)=>{
                    alert(err.response.data)
                    if(err.response.data==="email not exist please signup"){
                        navigate ("/signup")
                    }
                })
            }else{
                alert("email cann't be empty")
            }
        }
        return(
            <div className="logincontainer">
                <div className="logbox">
                    <h1 className="logologin">Logo</h1>
                    <p className="paragraph2">Enter your credentials to access your account</p>
                    <div>
                      
                      <input className="logininput1" placeholder="Email id" type="text" onChange={(e)=>{ setSignindata({...signindata, email: e.target.value}) }}/>
                    
                    </div>
                    <div className="input-wrapper">
                        <input className="logininput2"placeholder="password" type ={visibility?"text":"password"}onChange={(e) =>{ setSignindata({...signindata,email:e.target.value}) }}/>
                        <button className="btn" onClick={toggleBtn}>{
                            visibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
                        }

                        </button>
                    </div>
                    <button className="signin" onClick={handleLogin}>sign in</button>
                    <p className="account" onClick={navigate}>sign In</p>

                </div>
                <div className="signin-setup">
                    <span>Don't have an account?</span>
                    <p className="blue" onClick={naviSignup}>Sign up</p>
                </div>
            </div>
        )

    }
}

export default Signin