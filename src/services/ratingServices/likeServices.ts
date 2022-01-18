import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";

import client from "../commonServices";
import { LikeVideo } from "../../redux/types";

const likevideo: DocumentNode = gql`
    mutation($user_id: String!, $video_id: String!, $like: Int!) {
        createPayment(payment: {
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

export async function LikegVideo(user_id: String, video_id: String, like: number){
    try{
        const result = await client.mutate({
            mutation: likevideo,
            variables: {
                user_id: user_id,
                video_id: video_id,
                like: like
            }
        });
        const liked: LikeVideo = {
            user_id: '',
            video_id: '',
            like: 0
        }
        console.log(result.data);
        return liked;
    }catch(error){
        const liked: LikeVideo = {
            user_id: '',
            video_id: '',
            like: 0
        }
        return liked;
    }
    
}