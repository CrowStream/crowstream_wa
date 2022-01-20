import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Description from '../components/Description';
import VideoRow from '../components/VideoRow';
import { generate_home } from '../redux/reducers';
import store, { RootState, useReduxDispatch, useReduxSelector } from '../redux/store';
import { Video } from '../redux/types';
import { generateHome } from '../services';


export const Catalogue = React.memo(() =>{
    
    //Load_catalogue();
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();
    let catalogue = useSelector((state: RootState) => state.catalogue.videos.length > 0 ? state.catalogue.videos : []);
    return(
        <div>
        <Description video={useSelector((state: RootState) => state.description.video)} show={useSelector((state: RootState) => state.description.show)}/>
        {catalogue.map((video_set) => {
            return <VideoRow videoSet={video_set} />
        })}
        </div>
    );
});


