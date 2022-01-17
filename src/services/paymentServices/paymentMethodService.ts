import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { PaymentMethod } from "../../redux/types";

// Crowstream
import { token_protected_query, token_protected_mutation } from "../commonServices";

const retrieve_payment_method: DocumentNode = gql`
    query($method_id: ID!) {
        retrievePaymentMethodById(method_id: $method_id) {
            id
            account_id
            gift_card_id
            card_number
            card_expiry_date
            card_security_number
        }
    }
`;

const retrieve_payments_methods_by_account_id: DocumentNode = gql`
    query {
        retrievePaymentsByAccountId {
            id
            account_id
            gift_card_id
            card_number
            card_expiry_date
            card_security_number
        }
    }
`;

const create_payment_method: DocumentNode = gql`
    mutation($gift_card_id: Int, $card_number: String, $card_expiry_date: String, $card_security_number: String) {
        createPaymentMethod(method: {
            gift_card_id: $gift_card_id
            card_number: $card_number
            card_expiry_date: $card_expiry_date
            card_security_number: $card_security_number
        }) {
            method {
                id
                account_id
                gift_card_id
                card_number
                card_expiry_date
                card_security_number
            }
        }
    }
`;

const update_payment_method: DocumentNode = gql`
    mutation($method_id: ID!, $gift_card_id: Int, $card_number: String, $card_expiry_date: String, $card_security_number: String) {
        updatePaymentMethod(methodId: $method_id, method: {
            gift_card_id: $gift_card_id
            card_number: $card_number
            card_expiry_date: $card_expiry_date
            card_security_number: $card_security_number
        }) {
            method {
                id
                account_id
                gift_card_id
                card_number
                card_expiry_date
                card_security_number
            }
        }
    }
`;

const delete_payment_method: DocumentNode = gql`
    mutation($method_id: ID!) {
        deletePaymentMethod(methodId: $method_id) {
            boolean
        }
    }
`;

const delete_payment_methods: DocumentNode = gql`
    mutation {
        deletePaymentMethods {
            boolean
        }
    }
`;

export async function retrievePaymentMethod(id: number) {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_payment_method, {method_id: id});
        const payment_method: PaymentMethod = {
            id: result.data.id,
            account_id: result.data.account_id,
            gift_card_id: result.data.gift_card_id,
            card_number: result.data.card_number,
            card_expiry_date: result.data.card_expiry_date,
            card_security_number: result.data.card_security_number
        }
        console.log(payment_method);
        return payment_method;
    } catch (error) {
        console.error(error);
    }
}

export async function retrievePaymentMethodsByAccountId() {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_payments_methods_by_account_id, {});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function createPaymentMethod(gift_card_id: number, card_number: string, card_expiry_date: string, card_security_number: string) {
    try {
        const result = await token_protected_mutation(create_payment_method, {
            gift_card_id: gift_card_id,
            card_number: card_number,
            card_expiry_date: card_expiry_date,
            card_security_number: card_security_number
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function updatePaymentMethod(method_id: number, gift_card_id: number, card_number: string, card_expiry_date: string, card_security_number: string) {
    try {
        const result = await token_protected_mutation(update_payment_method, {
            method_id: method_id,
            gift_card_id: gift_card_id,
            card_number: card_number,
            card_expiry_date: card_expiry_date,
            card_security_number: card_security_number
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deletePaymentMethod(id: number) {
    try {
        const result = await token_protected_mutation(delete_payment_method, {method_id: id});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deletePaymentMethods() {
    try {
        const result = await token_protected_mutation(delete_payment_methods, {});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}