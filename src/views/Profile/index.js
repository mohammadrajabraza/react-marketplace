import { Redirect } from "react-router"
export default function Profile({activeUser}) {

    return Object.keys(activeUser).length === 0 ?
            <Redirect to="/login"/> :
            <div>
                Profile
            </div>

}