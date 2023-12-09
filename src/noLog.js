import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { changename } from "./counterSlice";
import axios from "axios";


const ReduxLogin=()=>{
  const dispatch=useDispatch()
    const navigate = useNavigate();
    const user=useSelector((state)=>state.counter.value)
    let [alldata,setalldata]=useState({
        email:"abinesh@gmail.com",
        password:12345,
        user_token:"aabbcc"
    })
    const checklogin=()=>{   
     
          axios({
            url:"https://0194fc19-9197-42e0-992e-dc4ea526ef43.mock.pstmn.io/get_data",
            method:"GET",
          }).then(function(response){
            
            if(alldata.email==response.data.email && alldata.password==response.data.password){
              localStorage.setItem("auth_token",response.data.user_token)
              dispatch(changename(alldata))
              console.log(typeof(alldata))
              // console.log(response.data.user_token)
              navigate('/home')       
            }
          })
   
    }
    
    return(<>
        <h2>Login Page</h2>
        <h4>Email</h4>
        <input type="text" value={alldata.email} onKeyUp={(e)=>setalldata({...alldata,email:e.target.value})}></input>
        <h4>Password</h4>
        <input type="text" value={alldata.password} onKeyUp={(e)=>setalldata({...alldata,password:e.target.value})}></input>
        <br></br>
        <button type="button" onClick={checklogin}>done</button>
        {JSON.stringify(user)}
        </>
       
    )
}
export default ReduxLogin;