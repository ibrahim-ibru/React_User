import { useState } from "react";
import Path from "./path";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function AddUser(){

    const [data,setData]=useState({
        username:'',
        password:'',
        cpassword:''
    })
    const [count,setCount]=useState(0)
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post(Path()+"/adduser",data)
            console.log(res);
            console.log(data);
            
            if(res.status==201){
                setCount(count+1)
                alert(res.data.msg)
                setData({username:"",password:"",cpassword:""})
                navigate("/login")
            }
            else{
                console.log(res.data.msg);
                
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return(
        <>
            <div className="adduser-body">
                <input type="text" name="username" onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}  placeholder="Enter your user name"/>
                <input type="password" name="password" id="" onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} placeholder="Enter password"/>
                <input type="password" name="cpassword" id="" onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))} placeholder="Confirm your password"/>
                <button className="btn-add" onClick={handleSubmit} type="submit">Submit</button>
            </div>
        </>
    )
}

export default AddUser