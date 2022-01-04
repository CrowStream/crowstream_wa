import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer
});


export * from './user';
export default rootReducer;