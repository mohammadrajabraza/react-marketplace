import swal from 'sweetalert'
import { getUser } from '../config/firebase'


const getUserById = async (id) => {
    let user;
    try{
        user = await getUser()
    }
    catch(e) {
        const {code, message} = e
        swal({
            title: code,
            text: message,
            icon: "error",
            dangerMode: true
        })
    }
    return user
}

export {
    getUserById
}