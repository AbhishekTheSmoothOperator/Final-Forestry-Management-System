const initialState = {
    user: undefined,
    isAuthUser: undefined
}

export default function LoginReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_Login_Success':
            return {
                ...state,
                user: action.users,
                isAuthUser: true
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        case 'Fetch_Customer_Login_Success':
            return {
                ...state,
                user: action.users,
                isAuthUser: true
            }
        case 'CUSTOMER_LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
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
        case 'Fetch_Customer_Signup_Success':
            return {
                ...state,
                user: action.users,
                isAuthUser: true
            }
        case 'CUSTOMER_SIGNUP_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        case 'LOGOUT':
            localStorage.removeItem("currentUser");
            return {
                ...state,
                isLoggedOut: true,
                currentUser: undefined,
                isAuthUser: undefined
            };
        default:
            return state;
    }
}