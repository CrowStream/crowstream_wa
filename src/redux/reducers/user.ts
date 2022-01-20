/**
 * User Reducers
 */

// Redux Toolkit
import {
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';

// Redux
import {
    AnyAction,
    Reducer
} from 'redux';

// Crowstream
import { User, Profile, Profiles } from '../types';


const userInitialState: User = {
    id: '',
    email: '',
    is_email_verified: false,
    token: '',
}

const currentProfileInitialState: Profile = {
    id: '',
    name: '',
}

const profilesInitialState: Profiles = {
    account_id: '',
    profiles: []
}

const userSlice: Slice<User, SliceCaseReducers<User>, string> = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        signIn: (state: User, action: PayloadAction<User>): User => {
            return {
                ...state,
                token: action.payload.token,
            };
        },
        signUp: (state: User, action: PayloadAction<User>): User => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                is_email_verified: action.payload.is_email_verified,
                token: ''
            }
        },
        whoAmI: (state: User, action: PayloadAction<User>): User => {
            const { id, email, is_email_verified } = action.payload;
            return {
                ...state,
                id,
                email,
                is_email_verified,
            };
        },
    },
});

const currentProfileSlice: Slice<Profile, SliceCaseReducers<Profile>, string> = createSlice({
    name: 'Profile',
    initialState: currentProfileInitialState,
    reducers: {
        createProfile: (state: Profile, _): Profile => {
            return state;
        },
        getProfileById: (state: Profile, action: PayloadAction<Profile>): Profile => {
            const { id, name } = action.payload;
            return {
                ...state,
                id,
                name,
            };
        },
    },
});

const profilesSlice: Slice<Profiles, SliceCaseReducers<Profiles>, string> = createSlice({
    name: 'Profiles',
    initialState: profilesInitialState,
    reducers: {
        getAllProfiles: (state: Profiles, action: PayloadAction<Profiles>): Profiles => {
            return {
                ...state,
                account_id: action.payload.account_id,
                profiles: action.payload.profiles
            };
        },
    },
});

export const {
    signIn,
    signUp,
    whoAmI,
}: CaseReducerActions<SliceCaseReducers<User>> = userSlice.actions;

export const {
    createPost,
    getPsotById,
}: CaseReducerActions<SliceCaseReducers<User>> = currentProfileSlice.actions;

export const {
    getAllProfiles,
}: CaseReducerActions<SliceCaseReducers<User>> = profilesSlice.actions;

export const {createProfile} = currentProfileSlice.actions;
export const userReducer: Reducer<User, AnyAction> = userSlice.reducer;
export const currentProfileReducer: Reducer<Profile, AnyAction> = currentProfileSlice.reducer;
export const profilesReducer: Reducer<Profiles, AnyAction> = profilesSlice.reducer;