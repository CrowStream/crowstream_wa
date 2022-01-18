/**
 * Common Services
 */

// Apollo
import {
    ApolloClient,
    DocumentNode,
    InMemoryCache,
    NormalizedCacheObject,
    OperationVariables
} from "@apollo/client";
import {store} from "../redux/store";


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://34.134.110.218:5533/graphql/',
    cache: new InMemoryCache()
});

export const token_protected_query = (query: DocumentNode, variables: OperationVariables) => client.query({
    query: query,
    variables: variables,
    context: {
        headers: {
            authorization: `Bearer ${store.getState().user.token}`
        }
    }
});

export function token_protected_mutation(mutation: DocumentNode, variables: OperationVariables){
    return client.mutate({
        mutation: mutation,
        variables: variables,
        context: {
            headers: {
                authorization: `Bearer ${store.getState().user.token}`
            }
        }
    });
}

export default client;