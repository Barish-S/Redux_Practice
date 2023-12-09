import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useSelector,useDispatch } from "react-redux";
import { changename,logout } from "./counterSlice";

const ReduxHome=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    let checkuser=useSelector((state)=>state.counter.value)
    console.log(checkuser)
    useEffect(()=>{
      if(!checkuser){
        alert(1)
        if(localStorage.getItem("auth_token")){
          axios.get("https://0194fc19-9197-42e0-992e-dc4ea526ef43.mock.pstmn.io/get_data",{token:localStorage.getItem("auth_token")}).then(function(response){
            if(localStorage.getItem("auth_token")==response.data.user_token){
             dispatch(changename(response.data))
            }
        })
        }else{
          navigate("/login")
        }
       }
        if(checkuser.email=="abinesh@gmail.com"){
          alert("Authenticate user")
        }
        else{
          navigate("/login")
        }
    },[])
    return(<>
    
    <h2>Product List</h2>
      <button type="button" onClick={()=>{dispatch(logout());navigate("/login");localStorage.removeItem("auth_token")}}>logout</button>
      {JSON.stringify(checkuser.email)}
      </>
    )
  }


  export default ReduxHome;