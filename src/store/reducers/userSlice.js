const user = (state = {}, action) => {
    switch (action.type) {
        case 'USER/ADD':
            return action.payload.user
        case 'USER/REMOVE':
            return {}
        default:
            return state
    }
}
export default user