import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { Invoice } from "../../redux/types";

// Crowstream
import { token_protected_query, token_protected_mutation } from "../common.services";

const retrieve_invoice: DocumentNode = gql`
    query($invoice_id: ID!) {
        retrieveInvoiceById(invoice_id: $invoice_id) {
            id
            account_id
            amount
            created_at
            limit_date
            payment_id
            state
        }
    }
`;

const retrieve_invoices_by_account_id: DocumentNode = gql`
    query {
        retrieveInvoicesByAccountId {
            id
            account_id
            amount
            created_at
            limit_date
            payment_id
            state
        }
    }
`;

const create_invoice: DocumentNode = gql`
    mutation($amount: Float!, $created_at: String!, $limit_date: String!, $payment_id: Int, $state: Int!) {
        createInvoice(invoice: {
            amount: $amount
            created_at: $created_at
            limit_date: $limit_date
            payment_id: $payment_id
            state: $state
        }) {
            invoice {
                id
                account_id
                amount
                created_at
                limit_date
                payment_id
                state
            }
        }
    }
`;

const update_invoice: DocumentNode = gql`
    mutation($invoice_id: ID!, $amount: Float!, $created_at: String!, $limit_date: String!, $payment_id: Int, $state: Int!) {
        updateInvoice(invoiceId: $invoice_id, invoice: {
            amount: $amount
            created_at: $created_at
            limit_date: $limit_date
            payment_id: $payment_id
            state: $state
        }) {
            invoice {
                id
                account_id
                amount
                created_at
                limit_date
                payment_id
                state
            }
        }
    }
`;

const delete_invoice: DocumentNode = gql`
    mutation($invoice_id: ID!) {
        deleteInvoice(invoiceId: $invoice_id) {
            boolean
        }
    }
`;

const delete_invoices: DocumentNode = gql`
    mutation {
        deleteInvoices {
            boolean
        }
    }
`;

export async function retrieveInvoice(id: number) {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_invoice, {invoice_id: id});
        const invoice: Invoice = {
            id: result.data.id,
            account_id: result.data.account_id,
            amount: result.data.amount,
            created_at: result.data.created_at,
            limit_date: result.data.limit_date,
            payment_id: result.data.payment_id,
            state: result.data.state
        }
        console.log(invoice);
        return invoice;
    } catch (error) {
        console.error(error);
    }
}

export async function retrieveInvoicesByAccountId() {
    try {
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_invoices_by_account_id, {});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function createInvoice(amount: number, created_at: string, limit_date: string, payment_id: number, state: number) {
    try {
        const result = await token_protected_mutation(create_invoice, {
            amount: amount,
            created_at: created_at,
            limit_date: limit_date,
            payment_id: payment_id,
            state: state
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function updateInvoice(invoice_id: number, amount: number, created_at: string, limit_date: string, payment_id: number, state: number) {
    try {
        const result = await token_protected_mutation(update_invoice, {
            invoice_id: invoice_id,
            amount: amount,
            created_at: created_at,
            limit_date: limit_date,
            payment_id: payment_id,
            state: state
        });
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteInvoice(id: number) {
    try {
        const result = await token_protected_mutation(delete_invoice, {invoice_id: id});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteInvoices() {
    try {
        const result = await token_protected_mutation(delete_invoices, {});
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}