const posts = (state = [], action) => {

    switch (action.type) {
        case 'POSTS/ADD_ALL':
            return action.payload.posts
        case 'POSTS/ADD':
            return [
                ...state,
                action.payload.post
            ]
        case 'POSTS/REMOVE':
            return state.filter((post) => post.id !== action.payload.id)
        default:
            return state
    }
}

export default posts