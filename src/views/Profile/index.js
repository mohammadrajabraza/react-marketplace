import { Redirect } from "react-router"
import { useSelector } from "react-redux"

export default function Profile() {
    
    const activeUser = useSelector(state => state.user)

    return Object.keys(activeUser).length === 0 ?
            <Redirect to="/login"/> :
            <div>
                Profile
            </div>

}