const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER/ADD':
            return {
                ...state,
                user: action.payload.user
            }
        case 'USER/REMOVE':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default userReducer