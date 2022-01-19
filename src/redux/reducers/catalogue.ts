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
import Description from '../../components/Description';
// Crowstream
import { Catalogue, ModalData } from '../types';

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

let initialModalState: ModalData = {
    video: {
        id: 0,
        video_name:"",
        released_year: 1,
        description: "",
        thumbnail_url: "",
        video_url: "",
        director: "",
        producer: "",
        genre: ""
    },
    show : false
}

const descriptionSlice: Slice<ModalData, SliceCaseReducers<ModalData>, string> =createSlice({
    name: 'description',
    initialState: initialModalState,
    reducers:{
        changeModalData: (state: ModalData, action: PayloadAction<ModalData>): ModalData => {
            return{
                ...state,
                show: action.payload.show,
                video: action.payload.video
            }
        },
        changeModalShow:(state: ModalData, action: PayloadAction<ModalData>): ModalData => {
            return{
                ...state,
                show: action.payload.show
            }
        }
    }
});

export const { generate_home }: CaseReducerActions<SliceCaseReducers<Catalogue>> = catalogueSlice.actions;
export const {changeModalData, changeModalShow}: CaseReducerActions<SliceCaseReducers<ModalData>> = descriptionSlice.actions;
export default catalogueSlice.reducer;
export const descriptionReducer = descriptionSlice.reducer;