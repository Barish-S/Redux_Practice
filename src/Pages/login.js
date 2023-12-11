import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setData, logAction } from '../Reducer/userSlice';

function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let logData = useSelector((state) => state.user.logData)
  let guest = useSelector((state) => state.user.guest)
  console.log(guest)
  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      navigate('/home')
    } else {
      navigate()
    }
  }, [])

  // function checkUser() {
  //   if(localStorage.getItem("guest_user")){
  //     localStorage.setItem('auth_token', true)
  //     localStorage.removeItem("guest_user")
  //     navigate(`user/${guest}`)
  //   }else{
  //   axios.post("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
  //     console.log(response.data)
  //     localStorage.setItem('auth_token', true)
  //     dispatch(setData(response.data.data))
  //     navigate("/home")

  //   })}
  // }

  function checkUser() {
    axios.post(`http://agaram.academy/api/action.php?request=candidate_login&email=${logData.email}&password=${logData.password}`).then(function (response) {
      console.log(response.data)
      if (response.data.status == "success") {
        if (guest!=0) {
          localStorage.setItem('auth_token', true)
          navigate(`user/${guest}`)
        } else {
          localStorage.setItem('auth_token', true)
          navigate("/home")

        }
      } else {
        alert("Wrong Details")
      }


    })

  }

  return (
    <Form>
      <h2>Login Page</h2><br />
      <b>{JSON.stringify(logData)}</b>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" defaultValue={"ajay@gmail.com"} onKeyUp={(e) => dispatch(logAction({ ...logData, email: e.target.value }))} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" defaultValue={"123456"} onKeyUp={(e) => dispatch(logAction({ ...logData, password: e.target.value }))} placeholder="Password" />
      </Form.Group>

      <Button type='button' onClick={() => checkUser()}>Submit</Button>
      <Button type='button' onClick={() => navigate("/register")}>For Register</Button>
    </Form>
  );
}


export default Login;