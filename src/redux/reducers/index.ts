import { combineReducers } from 'redux';
import userReducer from './user';
import paymentGroupReducer from './payment';
import paymentMethodGroupReducer from './payment_method'

const rootReducer = combineReducers({
    user: userReducer,
    payment: paymentGroupReducer,
    payment_method: paymentMethodGroupReducer
});


export * from './user';
export * from './payment';
export * from './payment_method'

export default rootReducer;