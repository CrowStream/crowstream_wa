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
import client from "../commonServices";

const order_video_list_by_genre: DocumentNode = gql`
    query{
        rateVideoList(profileId:$profileId, genre:$genre, nVideos: $nVideos)
    }
`;

export async function orderVideoListByGenre(profileId: string, genre: string, nVideos?: number) {
    try {
        const user: User = useSelector((state: RootState) => state.user);
        const result: ApolloQueryResult<any> = await client.query({
            query: order_video_list_by_genre,
            context: {
                headers: {
                    authorization: "Bearer "+user.token
                }
            }
        })
        return result.data.videos 
    } catch (error) {
        return []
    }
}