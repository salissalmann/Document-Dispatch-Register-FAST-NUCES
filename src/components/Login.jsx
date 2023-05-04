import React, { useContext , useState } from 'react'
import DDRContext from '../context/DDR-Context'
import "./Styles/Login.css"
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const Context = useContext(DDRContext)

    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
  
    const Navigate = useNavigate();
  
    const HandleEmailValue = (event) => {
      SetEmail(event.target.value);
    };
    const HandlePasswordValue = (event) => {
      SetPassword(event.target.value);
    };
  
    const Submit = async (e) => 
    {
      e.preventDefault();
      let Success = false;
      if (Context.AdminEmail===email && Context.AdminPassword===password) 
      {
        Success = true;
      }

      if (Success) {
        toast.success("Login Successful");
        setTimeout(() => {
            Navigate("/dashboard");
        }, 1000);
      }
      else 
      {
        toast.error("Invalid Credentials");
      }
    };
  
    return (
    <>
       <div className="NavBar">
            <h1>Document Dispatch Register</h1>
       </div>

       <div className="container my-5" id="Login-Container">
            <div className='row'>
                <div className="col" id="sidebar">
                    <img src="/LoginSidebar.png" alt="Logo" height={650} />
                </div>
                <div className="col" id="sidebar-2">
                    <Typography color="#031429" fontWeight="bold" fontSize="2.2rem" textAlign={"center"} marginTop="-2vw" fontFamily="Nunito"> Login to your Account </Typography>
                    <Typography color="#031429" fontWeight="700px" fontSize="1.6rem" textAlign={"center"} marginBottom="2rem" fontFamily="Nunito"> Enter Account Information </Typography>
                    <form onSubmit={Submit}>
                    <div id="login-form">
                        <div className="row">
                            <div className='col-lg-12'>
                            <TextField name="email"     id="email"      label="Email"      onChange={HandleEmailValue}  sx={{width:"180%"}} />
                            </div>
                        </div>
                    </div>
                    <div id="login-form">
                        <div className="row my-2">
                            <div className='col-lg-12'>
                                <TextField name="password"  id="password"   label="Password"   onChange={HandlePasswordValue}   sx={{width:"180%"}}/>
                            </div>
                        </div>
                    </div>
                    <div id="login-form-2">
                        <input type="checkbox" id="remember-me" name="remember-me" value="remember-me" />
                        <label for="remember-me"> Remember me </label>
                    </div>

                    <div id="login-form-2">
                        <Button type="submit" sx={{backgroundColor:"#031429", color:"white", width:"60%" , marginTop:"1%" ,fontFamily:"Nunito"}}> Login </Button>
                    </div>
                    </form>
                </div>
            </div>
       </div>
       <ToastContainer theme='colored'/>
    
    </>
  )
}
