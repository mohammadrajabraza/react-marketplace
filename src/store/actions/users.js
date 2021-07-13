const setActiveUser = user => ({
    type: 'USER/ADD',
    payload: {
        user
    }
})

const removeUser = () => ({
    type: 'USER/REMOVE'
})

// replaceActiveUser to replace active user
export {
    setActiveUser,
    removeUser
}