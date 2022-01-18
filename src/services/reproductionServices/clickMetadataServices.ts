/**
 * Click Metadata Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import client from "../common.services";

const get_click_count_metadata: DocumentNode = gql`
    query getClickCountMetadataById($user_id: String!, $video_id: Int!)   {
        getClickCountMetadataById(user_id: $user_id, video_id: $video_id) {
            user_id
            video_id
            click_video
            click_description
        }
    }
`;

const create_click_count_metadata: DocumentNode = gql`
    mutation($video_id: Int!) {
        createClickCountMetadata(clickCountMetadata: {
            video_id: $video_id
            click_video: false
            click_description: true
        }){
            clickCountMetadata{
                ID
            }
        }
    }
`;

const update_click_count_metadata: DocumentNode = gql`
    mutation($user_id: String!, $video_id: Int!) {
        updateClickCountMetadata(clickCountMetadata: {
            user_id: $user_id
            video_id: $video_id
            click_video: true
            click_description: true
        }){
            clickCountMetadata{
                ID,
                user_id,
                video_id,
                click_description,
                click_video
            }
        }
    }
`;

export async function GetClickCountMetadataById(user_id: string, video_id: number){
    try{
        console.log("user", user_id)
        console.log("vider", video_id)
        const result: ApolloQueryResult<any> = await client.query({
            query: get_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNTM5Y2M2LTNjYzUtNDA4Ny1hYjQwLWI3M2I4ZjU3OTIzNiIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDIzOTAzNDAsImV4cCI6MTY0MjM5Mzk0MH0.eLElUdpXfWiKvu8o49mACmDdMF-I8DleMj3rt2qOXqs"
                }
            },
            variables: {
                user_id: user_id,
                video_id: video_id
            }
        });
        console.log("como asi", result.data)
        const existsData = result.data.getClickCountMetadataById.user_id != null ? true : false
        return existsData;
    }catch(error){
        console.log("Error al obtener click count metadata ", error)
        return null;
    }
}

export async function CreateClickCountMetadata(video_id: Number){
    try{
        const result = await client.mutate({
            mutation: create_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNTM5Y2M2LTNjYzUtNDA4Ny1hYjQwLWI3M2I4ZjU3OTIzNiIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDIzOTQyMDgsImV4cCI6MTY0MjM5NzgwOH0.01L_jH3WAWFvIN9d_zeqgywXaUJ5biTKQdNCvG1wehY"
                }
            },
            variables: {
                video_id: video_id,
            }
        });
        const resultado: String = result.data.createClickCountMetadata.clickCountMetadata.ID;
        return resultado;
    }catch(error){
        console.log("el error", error)
        return "";
    }
}

export async function UpdateClickCountMetadata(user_id: String, video_id: Number){
    try{
        const result = await client.mutate({
            mutation: update_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNTM5Y2M2LTNjYzUtNDA4Ny1hYjQwLWI3M2I4ZjU3OTIzNiIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDIzOTAzNDAsImV4cCI6MTY0MjM5Mzk0MH0.eLElUdpXfWiKvu8o49mACmDdMF-I8DleMj3rt2qOXqs"
                }
            },
            variables: {
                user_id: user_id,
                video_id: video_id,
            }
        });
        console.log("lo que llego", result.data)
        const resultado: String = result.data.updateClickCountMetadata.clickCountMetadata.ID;
        return resultado;
    }catch(error){
        console.log("el error", error)
        return "";
    }
}