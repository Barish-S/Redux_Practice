import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setData } from '../../Reducer/userSlice';
import { setViewId } from '../../Reducer/userSlice';
function UserList(props) {
    let name = useSelector((state) => state.user.allData)
    let dispatch = useDispatch();

    useEffect(() => {
        getApiData();
    }, [])

    const getApiData = () => {

            axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
                dispatch(setData(response.data.data))
            })
        
    }

    function deleteUser(userId) {
        axios.get(`https://agaram.academy/api/action.php?request=removeMember&id=${userId}`).then(function(response){
            getApiData();
        })
    
    }


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>View</th>
                        {props.isDeleteVisible?<th>Delete</th>:null}
                    </tr>
                </thead>
                <tbody>
                    {name.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{localStorage.getItem("auth_token")?<Link to={`/user/${data.id}`}>View</Link>:<Link to={'/'} onClick={()=>dispatch(setViewId(data.id))}>View</Link>}</td>
                                {props.isDeleteVisible?<td><Button type='button' variant="outline-danger" onClick={() => deleteUser(data.id)}>Delete</Button></td>:null}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* <b>{JSON.stringify(name)}</b> */}
        </>
    )
}

export default UserList;