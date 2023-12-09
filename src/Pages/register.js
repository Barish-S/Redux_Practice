import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setRegData } from '../Reducer/userSlice';

function Register() {
    let dispatch = useDispatch();
    let regDetails = useSelector((state) => state.user.regData)

    function postData() {
        axios({
            method: 'POST',
            url: 'http://agaram.academy/api/action.php',
            Data: {
                request: "create_candidate",
                data: regDetails
            }
        }).then(function (response) {
            console.log(response.config.Data.data)

        })
    };


    return (
        <>
            <h2>Register Page</h2>
            <Form>
                {JSON.stringify(regDetails)}
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onKeyUp={(e) => dispatch(setRegData({ ...regDetails, name: e.target.value }))} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onKeyUp={(e) => dispatch(setRegData({ ...regDetails, email: e.target.value }))} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onKeyUp={(e) => dispatch(setRegData({ ...regDetails, password: e.target.value }))} placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>address</Form.Label>
                    <Form.Control onKeyUp={(e) => dispatch(setRegData({ ...regDetails, address: e.target.value }))} placeholder="Enter Address" />
                </Form.Group>

                <Button variant="primary" onClick={() => postData()} type="button">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Register;