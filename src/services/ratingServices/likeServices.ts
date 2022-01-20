import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";

import client from "../common.services";
import { LikedVideo } from "../../redux/types";

const likevideo: DocumentNode = gql`
    mutation($user_id: String!, $video_id: Int!, $like: Int!) {
        liking(liked: {
            user_id: $user_id
            video_id: $video_id
            like: $like
        }) {
            liked {
                user_id
                video_id
                like
            }
        }
    }
`;

const retrieve_actual_like: DocumentNode = gql`
    query($userId: String!, $video_id: Int!){
        actualLike(userId: $userId, videoId: $video_id)
    }
`;

export async function LikeVideo(user_id: String, video_id: number, like: number){
    try{
        const result = await client.mutate({
            mutation: likevideo,
            variables: {
                user_id: user_id,
                video_id: video_id,
                like: like
            }
        });
        const liked: LikedVideo = {
            user_id: result.data.user_id,
            video_id: result.data.video_id,
            like: result.data.like
        }
        console.log(result.data);
        return liked;
    }catch(error){
        const liked: LikedVideo = {
            user_id: '',
            video_id: '',
            like: 0
        }
        return liked;
    }
    
}

export async function retrieve_actualLike(user_id: string, video_id: number): Promise<number>{
    try{
        const result = await client.query({
            query: retrieve_actual_like,
            variables: {
                userId: user_id,
                video_id: video_id
            }
        });
        return result.data.actualLike
        
    }catch(error){
        let actual: number = -1
        return actual
    }
}