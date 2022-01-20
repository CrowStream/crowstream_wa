/**
 * Profile Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux";
import { Profile, Profiles } from "../../redux/types";

// Crowstream
import client, { token_protected_mutation, token_protected_query } from "../common.services";

const create_profile: DocumentNode = gql`
    mutation($name: String!) {
        createProfile(newProfile: {
            name: $name
        }) {
            profile {
                id
                account_id
                name
            }
        }
    }
`;

const get_profile_by_id: DocumentNode = gql `
    query($id: String!) {
        profilesById(id: $id) {
            id
            account_id
            name
        }
    }
`;

const get_all_profiles: DocumentNode = gql`
    query {
        userProfiles {
            account_id
            profiles {
                id
                name
            }
        }
    }
`;

export async function CreateProfile(name: String) {
    try{
        const token = store.getState().user.token;
        const result = await client.mutate({
            mutation: create_profile,
            context:{
                headers:{
                    authorization: "Bearer " + token
                }
            },
            variables: {
                name: name
            }
        })
        let profile: Profile ={
            id: result.data.createProfile.profile.id,
            name: result.data.createProfile.profile.name
        }
        return profile
    }catch(error){
        console.log("Error in CreateProfile: "+ error);
        let profile = {
            id:"",
            name:""
        }
        return profile;
    }
    
}

export async function GetProfileByID(id: String) {
    try{
        const token = store.getState().user.token;
        const result: ApolloQueryResult<any> = await client.query({
            query: get_profile_by_id,
            variables:{
                id: id
            },
            context:{
                headers:{
                    authorization: "Bearer " + token
                }
            }
        })
        let profile: Profile ={
            id: result.data.createProfile.profile.id,
            name: result.data.createProfile.profile.name
        }
        return profile;
    }catch(error){
        console.log("Error in GetProfileById: "+ error);
        let profile = {
            id:"",
            name:""
        }
        return profile;
    }
    
}

export async function GetAllProfiles() {
    try {
        const token = store.getState().user.token;
        const result: ApolloQueryResult<any> = await client.query({
            query: get_all_profiles,
            variables: {},
            context: {
                headers: {
                    authorization: "Bearer " + token
                }
            }
        })
        let profiles: Profiles ={
            account_id: result.data.userProfiles.account_id,
            profiles: result.data.userProfiles.profiles
        }
        return profiles;
    } catch (error) {
        console.log("Error in GetAllProfiles: " + error)
        let profiles ={
            account_id: "",
            profiles: []
        }
        return profiles;
    }
}