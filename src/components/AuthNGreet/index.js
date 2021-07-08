import { Link } from "react-router-dom"
export default function AuthNGreet(){
// export default function AuthNGreet({isAuthenticated, user}){
    // Decision an be made only by the user ibject itself
    // if the object is empty means no authenticated user 

    return <div className="item-auth-greeting">
        <Link to="/login">Login</Link>
        {/* {
            isAuthenticated ?
            <h2>Welcome <Link to="/profile">User</Link></h2> :
            <Link to="/login">Login</Link>
            } */}
    </div>
}