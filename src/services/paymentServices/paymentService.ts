import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { Payment } from "../../redux/types";

// Crowstream
import { token_protected_query, token_protected_mutation } from "../common.services";

const retrieve_payment: DocumentNode = gql`
    query($payment_id: ID!) {
        retrievePaymentById(payment_id: $payment_id) {
            id
            account_id
            method_id
            amount_applied
            payment_date
            description
            status
        }
    }
`;

const retrieve_payments_by_account_id: DocumentNode = gql`
    query {
        retrievePaymentsByAccountId {
            id
            account_id
            method_id
            amount_applied
            payment_date
            description
            status
        }
    }
`;

const create_payment: DocumentNode = gql`
    mutation($method_id: Int!, $amount: Float!, $payment_date: String!, $description: String, $status: Int!) {
        createPayment(payment: {
            method_id: $method_id
            amount_applied: $amount
            payment_date: $payment_date
            description: $description
            status: $status
        }) {
            payment {
                id
                account_id
                method_id
                amount_applied
                payment_date
                description
                status
            }
        }
    }
`;

const update_payment: DocumentNode = gql`
    mutation($payment_id: ID!, $method_id: Int!, $amount: Float!, $payment_date: String!, $description: String, $status: Int!) {
        updatePayment(paymentId: $payment_id, payment: {
            method_id: $method_id
            amount_applied: $amount
            payment_date: $payment_date
            description: $description
            status: $status
        }) {
            payment {
                id
                account_id
                method_id
                amount_applied
                payment_date
                description
                status
            }
        }
    }
`;

const delete_payment: DocumentNode = gql`
    mutation($payment_id: ID!) {
        deletePayment(paymentId: $payment_id) {
            boolean
        }
    }
`;

export async function retrievePayment(id: number) {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_payment, {payment_id: id});
        const payment: Payment = {
            id: result.data.id,
            account_id: result.data.account_id,
            method_id: result.data.method_id,
            amount_applied: result.data.amount_applied,
            payment_date: result.data.payment_date,
            description: result.data.description,
            status: result.data.status
        }
        console.log(payment);
        return payment;
    } catch (error) {
        console.error(error);
    }
}

export async function retrievePaymentsByAccountId() {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_payments_by_account_id, {});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function createPayment(method_id: number, amount: number, payment_date: string, description: string, status: number) {
    try {
        const result = await token_protected_mutation(create_payment, {
            method_id: method_id,
            amount_applied: amount,
            payment_date: payment_date,
            description: description,
            status: status
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function updatePayment(payment_id: number, method_id: number, amount: number, payment_date: string, description: string, status: number) {
    try {
        const result = await token_protected_mutation(update_payment, {
            payment_id: payment_id,
            method_id: method_id,
            amount_applied: amount,
            payment_date: payment_date,
            description: description,
            status: status
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deletePayment(id: number) {
    try {
        const result = await token_protected_mutation(delete_payment, {payment_id: id});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}