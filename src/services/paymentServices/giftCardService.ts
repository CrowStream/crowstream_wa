import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { GiftCard } from "../../redux/types";

// Crowstream
import { token_protected_query, token_protected_mutation } from "../commonServices";

const retrieve_gift_card: DocumentNode = gql`
    query($card_id: ID!) {
        retrieveCardById(card_id: $card_id) {
            id
            card_code
            amount
            is_active
            expiration_date
        }
    }
`;

const retrieve_gift_card_by_code: DocumentNode = gql`
    query($card_code: String!) {
        retrieveCardByCode(card_code: $card_code) {
            id
            card_code
            amount
            is_active
            expiration_date
        }
    }
`;

const create_gift_card: DocumentNode = gql`
    mutation($card_code: String!, $amount: Float!, $is_active: Boolean!, $expiration_date: String!) {
        createGiftCard(card: {
            card_code: $card_code
            amount: $amount
            is_active: $is_active
            expiration_date: $expiration_date
        }) {
            card {
                id
                card_code
                amount
                is_active
                expiration_date
            }
        }
    }
`;

const update_gift_card: DocumentNode = gql`
    mutation($card_id: ID!, $card_code: String!, $amount: Float!, $is_active: Boolean!, $expiration_date: String!) {
        updateGiftCard(cardId: $card_id, card: {
            card_code: $card_code
            amount: $amount
            is_active: $is_active
            expiration_date: $expiration_date
        }) {
            card {
                id
                card_code
                amount
                is_active
                expiration_date
            }
        }
    }
`;

const delete_gift_card: DocumentNode = gql`
    mutation($card_id: ID!) {
        deleteGiftCard(cardId: $card_id) {
            boolean
        }
    }
`;

export async function retrieveGiftCard(id: number) {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_gift_card, {card_id: id});
        const gift_card: GiftCard = {
            id: result.data.id,
            card_code: result.data.card_code,
            amount: result.data.amount,
            is_active: result.data.is_active,
            expiration_date: result.data.expiration_date
        }
        console.log(gift_card);
        return gift_card;
    } catch (error) {
        console.error(error);
    }
}

export async function retrieveGiftCardByCode(code: String) {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_gift_card_by_code, {card_code: code});
        const gift_card: GiftCard = {
            id: result.data.id,
            card_code: result.data.card_code,
            amount: result.data.amount,
            is_active: result.data.is_active,
            expiration_date: result.data.expiration_date
        }
        console.log(gift_card);
        return gift_card;
    } catch (error) {
        console.log(error);
    }
}

export async function createGiftCard(card_code: string, amount: number, is_active: boolean, expiration_date: string) {
    try {
        const result = await token_protected_mutation(create_gift_card, {
            card_code: card_code,
            amount: amount,
            is_active: is_active,
            expiration_date: expiration_date
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function updateGiftCard(card_id: number, card_code: string, amount: number, is_active: boolean, expiration_date: string) {
    try {
        const result = await token_protected_mutation(update_gift_card, {
            card_id: card_id,
            card_code: card_code,
            amount: amount,
            is_active: is_active,
            expiration_date: expiration_date
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteGiftCard(id: number) {
    try {
        const result = await token_protected_mutation(delete_gift_card, {card_id: id});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}