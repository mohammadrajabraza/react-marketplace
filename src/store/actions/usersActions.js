const setActiveUser = user => ({
    type: 'USER/ADD',
    payload: {
        user
    }
})

const removeUser = () => ({
    type: 'USER/REMOVE'
})

export {
    setActiveUser,
    removeUser
}