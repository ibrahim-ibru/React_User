import React, { useState } from 'react';
import "../App.css"
import axios from 'axios';
import Path from './path';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  })

  const navigate=useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`${Path()}/login`,loginData)
      if(res.status==200){
        const {token,msg}=res.data
        if(token){

          sessionStorage.setItem("token",token)
          alert(msg)
          setLoginData({username:"",password:""})
          navigate("/")
        }
        else{
          alert("Token not generated")
        }
      }
      else{
        alert(res.data.msg)
      }
    } catch (error) {
      console.log(error);
      
    }
    
  };

  return (
    <>
    <div className="adduser-body">
                <input type="text" name="username" onChange={(e) => setLoginData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}  placeholder="Enter your user name"/>
                <input type="password" name="password" id="" onChange={(e) => setLoginData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} placeholder="Enter password"/>
                <button className="btn-add" onClick={handleSubmit} type="submit">Login</button>
                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
    </>
  );
};

export default LoginPage;
