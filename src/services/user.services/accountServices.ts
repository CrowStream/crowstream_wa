/**
 * Account Services
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
import client, { token_protected_mutation, token_protected_query } from "../common.services";


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

const sign_up: DocumentNode = gql`
    mutation($email: String!, $password: String!) {
        signup(accountCredentials: {
            email: $email
            password: $password
        }) {
            account {
                id
                email
                is_email_verified
            }
        }
    }
`;

const who_i_am: DocumentNode = gql`
    query {
        whoAmI {
            id
            email
            is_email_verified
        }
    }
`;

export async function SignIn(email: String, password: String) {
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

export async function SignUp(email: String, password: String) {
    try{
        const result = await client.mutate({
            mutation: sign_up,
            variables:{
                email: email,
                password: password
            }
        });
        console.log("Result: "+result.data.signup.account.id)
        let user: User = {
            id: result.data.signup.account.id,
            email: result.data.signup.account.email,
            is_email_verified: result.data.signup.account.is_email_verified,
            token: ''
        }
        console.log("Reducer id: "+user.id)
        return user;
    }catch(error){
        let user: User = {
            id: '',
            email: '',
            is_email_verified: false,
            token: ''
        }
        console.log("Signup error: "+error)
        return user;
    }
}

export async function WhoIAm() {
    try{
        const token = useSelector((state: RootState) => state.user.token)
        const result: ApolloQueryResult<any> = await client.query({
            query: who_i_am,
            context: {
                headers: {
                    authorization: "`Bearer " + token
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