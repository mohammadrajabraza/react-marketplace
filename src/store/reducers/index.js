import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
});

export default rootReducer
