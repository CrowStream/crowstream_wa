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

export async function OrderVideoListByGenre(genre: string, nVideos?: number){
    try {
        const profileId = useSelector((state: RootState) => state.currentProfile.id);
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