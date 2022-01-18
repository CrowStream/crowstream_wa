import { combineReducers } from 'redux';
import userReducer from './user';
import paymentGroupReducer from './payment';
import paymentMethodGroupReducer from './payment_method'
import catalogueReducer from './catalogue'

const rootReducer = combineReducers({
    user: userReducer,
    payment: paymentGroupReducer,
    payment_method: paymentMethodGroupReducer,
    catalogue: catalogueReducer
});


export * from './user';
export * from './payment';
export * from './payment_method'
export * from './catalogue';
export default rootReducer;