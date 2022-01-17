/**
 * Account Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { User } from "../../redux/types";

// Crowstream
import client from "../common.services";


const who_i_am: DocumentNode = gql`
    query {
        whoAmI {
            id
            email
            is_email_verified
        }
    }
`;

const sign_in: DocumentNode = gql` 
    mutation($email: String!, $password: String!) {
        signin(accountCredentials: {
        email: $email
        password: $password
        }) {
        token {
            token
        }
        }
    }
`;

// TODO: Fix token usage
export async function WhoIAm(){
    try{
        const result: ApolloQueryResult<any> = await client.query({
            query: who_i_am,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwZTU4OTc5LTM3MWYtNDdhMy04ODdhLTQ2ZjNkZmM3MTc0MCIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDA4MjcyMzEsImV4cCI6MTY0MDgzMDgzMX0.CgnuFOkkNUJky87Fk313odb_E-JfO_1IvxqIzuGaN8c"
                }
            }
        });
        const user: User = {
            id: result.data.whoAmI.id,
            email: result.data.whoAmI.email,
            is_email_verified: result.data.whoAmI.id,
            token: ''
        }
        return user;
    }catch(error){
        const user: User = {
            id: '',
            email: '',
            is_email_verified: '' != '',
            token: ''
        }
        return user;
    }
    
}

export async function SignIn(email: String, password: String){
    try{
        const result = await client.mutate({
            mutation: sign_in,
            variables: {
                email: email,
                password: password
            }
        });
        const user: User = {
            id: '',
            email: '',
            is_email_verified: '' != '',
            token: result.data.signin.token.token
        }
        return user;
    }catch(error){
        const user: User = {
            id: '',
            email: '',
            is_email_verified: '' != '',
            token: ''
        }
        return user;
    }
    
}