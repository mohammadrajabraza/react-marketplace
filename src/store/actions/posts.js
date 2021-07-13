const setAllPosts = posts => ({
    type: 'POSTS/ADD_ALL',
    payload: {
        posts
    }
})

const setPost = post => ({
    type: 'POSTS/ADD',
    payload: {
        post
    }
})

const deletePost = id => ({
    type: 'POSTS/REMOVE',
    payload: {
        id
    }
})

export {
    setAllPosts,
    setPost,
    deletePost
}