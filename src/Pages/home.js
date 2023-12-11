
import UserList from './Component/UserList';
import SignOut from './Component/Signout';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setData } from '../Reducer/userSlice';
import { useEffect } from 'react';
function Home() {
    useEffect(() => {
        allData()
    })

    let dispatch = useDispatch();
    function allData() {
        axios.post("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
            console.log(response.data)
            dispatch(setData(response.data.data))
        })
    }
    return (
        <>

            {localStorage.getItem("auth_token") ? <SignOut /> : null}
            <h2>Welcome Home</h2>
            <UserList />
            {/* <b>{JSON.stringify(name)}</b> */}
        </>
    )
}
export default Home;