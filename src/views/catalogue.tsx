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
        <Button onClick={async() => {await dispatch(generate_home(await generateHome()))}}>Cargar Catalogo xd</Button>
        {catalogue.map((video_set) => {
            return <VideoRow videoSet={video_set} />
        })}
        </div>
    );
});

const Load_catalogue = async() => {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();
    console.log("ANTES:" + JSON.stringify(store.getState()));
    await dispatch(generate_home(await generateHome()));
    console.log("DESPUES:" + JSON.stringify(store.getState()));
}


