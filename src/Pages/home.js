
import UserList from './Component/UserList';
import SignOut from './Component/Signout';
function Home() {

 return (
        <>
            
            {localStorage.getItem("auth_token")?<SignOut />:null}
            <h2>Welcome Home</h2>
            <UserList />
            {/* <b>{JSON.stringify(name)}</b> */}
        </>
    )
}
export default Home;