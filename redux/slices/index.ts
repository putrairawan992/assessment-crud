import { combineReducers } from '@reduxjs/toolkit';
import userReducers from './user.slice';

const rootReducer = combineReducers({
    user: userReducers
});
export default rootReducer;