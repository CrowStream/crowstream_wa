import { combineReducers } from 'redux';
import {userReducer, profilesReducer, currentProfileReducer} from './user';
import ratingReducer from './rating';
//import paymentMethodGroupReducer from './payment_method'
import catalogueReducer, {descriptionReducer} from './catalogue'

const rootReducer = combineReducers({
    user: userReducer,
    //payment: paymentGroupReducer,
    //payment_method: paymentMethodGroupReducer,
    rating: ratingReducer,
    catalogue: catalogueReducer,
    description: descriptionReducer,
    profiles: profilesReducer,
    currentProfile: currentProfileReducer
});


export * from './user';
//export * from './payment';
//export * from './payment_method'
export * from './catalogue';
export default rootReducer;