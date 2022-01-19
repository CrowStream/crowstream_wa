import {
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';

// Crowstream
import { LikedVideo } from '../types';

const initialStateRating: LikedVideo = {
    user_id: '',
    video_id: '',
    like: -1
}

const ratingSlice: Slice<LikedVideo, SliceCaseReducers<LikedVideo>, string> = createSlice({
    name: 'rating',
    initialState: initialStateRating,
    reducers: {
        retrieve_actual: (state: LikedVideo, action: PayloadAction<LikedVideo>): LikedVideo => {
             return {
                ...state,
                user_id: action.payload.user_id,
                video_id: action.payload.video_id,
                like: action.payload.like
            }
        }
    }
});

export const { retrieve_actual }: CaseReducerActions<SliceCaseReducers<LikedVideo>> = ratingSlice.actions
export default ratingSlice.reducer