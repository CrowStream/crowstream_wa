/**
 * Recommendation Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { User } from "../../redux/types";

// Crowstream
import client from "../common.services";

const order_video_list_by_genre: DocumentNode = gql`
    query($profileId: String, $genre: String, $nVideos: Int){
        rateVideoList(profileId:$profileId, genre:$genre, nVideos: $nVideos)
    }
`;

export async function orderVideoListByGenre(genre: string, nVideos?: number){
    try {
        let profileId = 'c1608e9c-12df-42cb-a523-6cc33b5a00e9'; //TODO quitar
        //const user: User = useSelector((state: RootState) => state.user);//sacar profile del store
        const result: ApolloQueryResult<any> =  await client.query({
            query: order_video_list_by_genre,
            variables: {
                profileId: profileId,
                genre: genre,
                nVideos: nVideos
            }
        })
        return result.data.rateVideoList 
    } catch (error) {
        return []
    }
}