import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function AuthNGreet(){
    const activeUser = useSelector(state => state.user)
// export default function AuthNGreet({isAuthenticated, user}){
    // Decision an be made only by the user ibject itself
    // if the object is empty means no authenticated user 

    return <div className="item-auth-greeting">
        {
            activeUser && Object.keys(activeUser).length > 0 ?
            <h2>Welcome <Link to="/profile">{activeUser.fullname}</Link></h2> :
            <Link to="/login">Login</Link>
            }
    </div>
}