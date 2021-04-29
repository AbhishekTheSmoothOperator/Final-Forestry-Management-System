const initialState = {
    customer: undefined,
    isAuthCustomer: undefined
}

export default function SignupReducerCustomer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_Customer_Signup_Success':
            return {
                ...state,
                customer: action.customers,
                isAuthCustomer: true
            }
        case 'CUSTOMER_SIGNUP_FAILURE':
            return {
                ...state,
                isAuthCustomer: false
            };
        default:
            return state;
    }
}