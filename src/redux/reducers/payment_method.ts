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
import { PaymentMethod, PaymentMethodGroup } from '../types';

const initialStatePaymentMethod: PaymentMethodGroup = {
    methods: []
}

const paymentMethodGroupSlice: Slice<PaymentMethodGroup, SliceCaseReducers<PaymentMethodGroup>, string> = createSlice({
    name: 'payment_method',
    initialState: initialStatePaymentMethod,
    reducers: {
        retrieve_payment_method: (state: PaymentMethodGroup, action: PayloadAction<PaymentMethod>): PaymentMethodGroup => {
            return state;
        },
        retrieve_payment_methods_by_account_id: (state: PaymentMethodGroup, action: PayloadAction<[PaymentMethod]>): PaymentMethodGroup => {
            return {
                ...state,
                methods: action.payload
            }
        },
        create_payment_method: (state: PaymentMethodGroup, action: PayloadAction<PaymentMethod>): PaymentMethodGroup => {
            state.methods.push(action.payload);
            return state;
        },
        update_payment_method: (state: PaymentMethodGroup, action: PayloadAction<PaymentMethod>): PaymentMethodGroup => {
            for (let method of state.methods) {
                if (method?.id === action.payload.id) {
                    method.gift_card_id = action.payload.gift_card_id;
                    method.card_number = action.payload.card_number;
                    method.card_security_number = action.payload.card_security_number;
                    method.card_expiry_date = action.payload.card_expiry_date;
                }
                break;
            }
            return state;
        },
        delete_payment_method: (state: PaymentMethodGroup, action: PayloadAction<PaymentMethod>): PaymentMethodGroup => {
            state.methods.forEach((method, index) => {
                if (method?.id === action.payload.id) {
                    state.methods.splice(index, 1);
                }
            });
            return state;
        },
        delete_payment_methods: (state: PaymentMethodGroup, action: PayloadAction<PaymentMethod>): PaymentMethodGroup => {
            state.methods = [];
            return state;
        }
    }
});

export const {
    retrieve_payment_method,
    retrieve_payment_methods_by_account_id,
    create_payment_method,
    update_payment_method,
    delete_payment_method,
    delete_payment_methods
}: CaseReducerActions<SliceCaseReducers<PaymentMethodGroup>> = paymentMethodGroupSlice.actions;

export default paymentMethodGroupSlice.reducer;