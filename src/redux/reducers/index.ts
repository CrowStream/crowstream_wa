import { combineReducers } from 'redux';
import userReducer from './user';
import catalogueReducer from './catalogue'

const rootReducer = combineReducers({
    user: userReducer,
    catalogue: catalogueReducer
});


export * from './user';
export * from './catalogue';
export default rootReducer;