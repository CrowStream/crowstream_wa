/**
 * Profile Services
 */

// Apollo
import {
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import { token_protected_mutation, token_protected_query } from "../common.services";

const create_profile: DocumentNode = gql`
    mutation($name: String!) {
        createPrfile(newProfile: {
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

export function CreateProfile(name: String) {
    return new Promise((resolve) => {
        token_protected_mutation(create_profile, { name })
            .then(resolve)
            .catch(console.error);
    });
}

export function GetProfileByID(id: String) {
    return new Promise((resolve) => {
        token_protected_query(get_profile_by_id, { id })
            .then(resolve)
            .catch(console.error);
    });
}

export function GetAllProfiles() {
    return new Promise((resolve) => {
        token_protected_query(get_all_profiles, {})
            .then(resolve)
            .catch(console.error);
    });
}