/**
 * Payment Reducers
 */

// Redux Toolkit
import {
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';

// Crowstream
import { Payment, PaymentGroup } from '../types';

const initialStatePayment: PaymentGroup = {
    payments: []
}

const paymentGroupSlice: Slice<PaymentGroup, SliceCaseReducers<PaymentGroup>, string> = createSlice({
    name: 'payment',
    initialState: initialStatePayment,
    reducers: {
        retrieve_payment: (state: PaymentGroup, action: PayloadAction<Payment>): PaymentGroup => {
            return state;
        },
        retrieve_payments_by_account_id: (state: PaymentGroup, action: PayloadAction<[Payment]>): PaymentGroup => {
            return {
                ...state,
                payments: action.payload
            }
        },
        create_payment: (state: PaymentGroup, action: PayloadAction<Payment>): PaymentGroup => {
            state.payments.push(action.payload);
            return state;
        },
        update_payment: (state: PaymentGroup, action: PayloadAction<Payment>): PaymentGroup => {
            for (let payment of state.payments) {
                if (payment?.id === action.payload.id) {
                    payment.method_id = action.payload.method_id;
                    payment.amount_applied = action.payload.amount_applied;
                    payment.payment_date = action.payload.payment_date;
                    payment.description = action.payload.description;
                    payment.status = action.payload.status;
                }
                break;
            }
            return state;
        },
        delete_payment: (state: PaymentGroup, action: PayloadAction<Payment>): PaymentGroup => {
            state.payments.forEach((payment, index) => {
                if (payment?.id === action.payload.id) {
                    state.payments.splice(index, 1);
                }
            });
            return state;
        }
    }
});

export const {
    retrieve_payment,
    retrieve_payments_by_account_id,
    create_payment,
    update_payment,
    delete_payment
}: CaseReducerActions<SliceCaseReducers<PaymentGroup>> = paymentGroupSlice.actions;

export default paymentGroupSlice.reducer;