
/**
 * User Types
 */

 export interface User {
    id: string,
    email: string,
    is_email_verified: boolean,
    token: string
}

export interface Profile {
    id: string,
    name: string,
};

export interface Profiles {
    account_id: string,
    profiles: Profile[],
};