import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Table from 'react-bootstrap/Table';
import { setDataById } from '../Reducer/userSlice';
import UserList from './Component/UserList';
import SignOut from './Component/Signout';

function UserDetails() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { userId } = useParams()
    let dataById = useSelector((state) => state.user.DataById)

    useEffect(() => {
        UserData();
    }, [userId])

    const UserData = () => {
        if (localStorage.getItem("auth_token")) {
            axios.get(`https://agaram.academy/api/action.php?request=getMemberDetail&id=${userId}`).then(function (response) {
                console.log(response.data.data)
                dispatch(setDataById(response.data.data))
            })
        } else {
            navigate('/')
        }
    }



    return (
        <>
            <SignOut/>
            <h2>User Details</h2>
            <h3>{JSON.stringify(userId)}</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{dataById.id}</td>
                        <td>{dataById.name}</td>
                        <td>{dataById.email}</td>
                        <td>{dataById.password}</td>
                        <td>{dataById.phone}</td>
                        <td>{dataById.address}</td>

                    </tr>
                </tbody>
            </Table>
            <UserList isDeleteVisible={true}/>



        </>
    );
}

export default UserDetails;