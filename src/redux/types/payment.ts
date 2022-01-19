export interface Invoice {
    id: number,
    account_id: string,
    amount: number,
    created_at: string,
    limit_date: string,
    payment_id: number,
    state: number
}

export interface Payment {
    id: number,
    account_id: string,
    method_id: number,
    amount_applied: number,
    payment_date: string,
    description: string,
    status: number
}

export interface PaymentGroup {
    payments: [Payment?]
}

export interface PaymentMethod {
    id: number,
    account_id: string,
    gift_card_id: number,
    card_number: string,
    card_expiry_date: string,
    card_security_number: string
}

export interface PaymentMethodGroup {
    methods: [PaymentMethod?]
}

export interface GiftCard {
    id: number,
    card_code: string,
    amount: number,
    is_active: boolean,
    expiration_date: string
}