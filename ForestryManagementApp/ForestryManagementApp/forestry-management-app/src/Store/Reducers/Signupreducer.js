const initialState = {
    user: undefined,
    isAuthUser: undefined
}

export default function SignupReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_Signup_Success':
            return {
                ...state,
                user: action.users,
                isAuthUser: true
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        default:
            return state;
    }
}
