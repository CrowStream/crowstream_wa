/**
 * Catalogue Reducers
 */

// Redux Toolkit
import {
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';
// Crowstream
import { Catalogue } from '../types';

let initialState: Catalogue = {
    videos: []
}
const catalogueSlice: Slice<Catalogue, SliceCaseReducers<Catalogue>, string> = createSlice({
    name: 'catalogue',
    initialState: initialState,
    reducers: {
        generate_home: (state: Catalogue, action: PayloadAction<Catalogue>): Catalogue => {
            return {
                ...state,
                videos: action.payload.videos
            }
        }  
    }
});

export const { generate_home }: CaseReducerActions<SliceCaseReducers<Catalogue>> = catalogueSlice.actions;
export default catalogueSlice.reducer;