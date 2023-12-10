import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../Reducer/userSlice';
function SignOut() {
    // let [tableData, updateData] = useState([])
    let navigate = useNavigate();
    let dispatch = useDispatch();

    function Logout() {
        localStorage.removeItem('auth_token')
        dispatch(logoutAction({}))
        navigate('/')
    }
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=" " onClick={()=>Logout()}>SignOut</Navbar.Brand>
      </Container>
    </Navbar>
        </>
    )
}

export default SignOut