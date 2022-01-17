import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import VideoRow from '../components/VideoRow';
import { generate_home } from '../redux/reducers';
import store, { RootState, useReduxDispatch, useReduxSelector } from '../redux/store';
import { generateHome } from '../services';


export const Catalogue = React.memo(() =>{
    //Load_catalogue();
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();
    let catalogue = useSelector((state: RootState) => state.catalogue.videos.length > 0 ? state.catalogue.videos : []);
    return(
        <div>
        <Button onClick={async() => {await dispatch(generate_home(await generateHome()))}}>Cargar Catalogo xd</Button>
        {catalogue.map((video_set) => {
            return <VideoRow video_list={video_set.video_list} description={video_set.description}  />
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


