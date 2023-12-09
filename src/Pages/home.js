
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Reducer/userSlice';
import UserList from './Component/UserList';
function Home() {
    // let [tableData, updateData] = useState([])
    let navigate = useNavigate();
    let dispatch = useDispatch();

    function Logout() {
        localStorage.removeItem('auth_token')
        dispatch(logoutAction({}))
        navigate('/')
    }

    return (
        <>
            <h2>Welcome Home</h2><button type='button' onClick={() => Logout()}>Logout</button>
            <UserList />
            {/* <b>{JSON.stringify(name)}</b> */}
        </>
    )
}

export default Home;