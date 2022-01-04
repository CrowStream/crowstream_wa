// Redux Toolkit
import { 
    configureStore, EnhancedStore
} from '@reduxjs/toolkit';

// Crowstream
import rootReducer from './reducers';



export const store: EnhancedStore = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;