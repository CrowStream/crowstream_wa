// Redux Toolkit
import { 
    configureStore, EnhancedStore
} from '@reduxjs/toolkit';

// React Redux
import { 
    useDispatch,
    useSelector, 
    TypedUseSelectorHook 
} from 'react-redux';

// Crowstream
import rootReducer from './reducers';



export const store: EnhancedStore = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch: () => AppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;