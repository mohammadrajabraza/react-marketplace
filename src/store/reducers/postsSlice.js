import produce from 'immer'
const posts = (postsArray = [], action) => {

    switch (action.type) {
        case 'POSTS/ADD_ALL':
            return action.payload.posts
        case 'POSTS/ADD':
            return produce(postsArray, draft => {
                draft.push(action.payload.post)
            })
            //     [
            //     ...postsArray,
            //     action.payload.post
            // ]
        case 'POSTS/REMOVE':
            return postsArray.filter((post) => post.id !== action.payload.id)
        default:
            return postsArray
    }
}

export default posts