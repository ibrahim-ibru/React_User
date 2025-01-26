import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import Path from "./path";
function Home(){
    const navigate=useNavigate();
    const [user,setUser]=useState("");

    const getUser=async ()=>{
        const token=sessionStorage.getItem("token")
        
        if(!token){
            alert("No token found. Redirecting to login.")
            navigate("/login")
            return;
        }

        try {
            const res=await axios.get(`${Path()}/home`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })
            console.log(res);
            
            if(res.status==200){
                const {username,msg}=await res.data
                alert(msg)
                console.log(username);
                const name=username
                setUser(name)
                
            }
            else{
                console.log(res.data.msg)
            }
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    useEffect(()=>{
        getUser()
    },[])

    return(
        <>
        <nav className="navbar">
            <h1>Hello {user ||"loding..."}</h1>
        </nav>
        </>
    )
}

export default Home