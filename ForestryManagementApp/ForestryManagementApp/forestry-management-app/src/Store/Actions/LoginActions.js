import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

export const fetchLoginSuccess = (users) => {

    return {
        type: 'Fetch_Login_Success',
        users
    }
};
export const loginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
};
export const fetchCustomerLoginSuccess = (users) => {

    return {
        type: 'Fetch_Customer_Login_Success',
        users
    }
};
export const CustomerloginFailure = () => {
    return {
        type: 'CUSTOMER_LOGIN_FAILURE'
    }
};

export const doLogin = (payload) => {
    let data = {
        adminName: payload.adminName,
        adminPassword: payload.adminPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/admins/signIn',data)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(loginFailure());
            });
    };
};

export const doCustomerLogin = (payload) => {
    let data = {
        customerName: payload.customerName,
        customerPassword: payload.customerPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/customers/signIn',data)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchCustomerLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(CustomerloginFailure());
            });
    };
};

export const fetchSignupSuccess = (users) => {

    return {
        type: 'Fetch_Signup_Success',
        users
    }
};
export const SignupFailure = () => {
    return {
        type: 'SIGNUP_FAILURE'
    }
};

export const doSignup = (payload) => {
    let data = {
        adminName: payload.adminName,
        adminPassword:payload.adminPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/admins/signUp',data)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchSignupSuccess(resp.data))
            })
            .catch(error => {
                dispatch(SignupFailure());
            });
    };
};

export const fetchCustomerSignupSuccess = (users) => {

    return {
        type: 'Fetch_Customer_Signup_Success',
        users
    }
};
export const CustomerSignupFailure = () => {
    return {
        type: 'CUSTOMER_SIGNUP_FAILURE'
    }
};

export const doCustomerSignup = (payload) => {
    let data = {
        customerName: payload.customerName,
        customerPassword:payload.customerPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/customer/signUp',data)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchCustomerSignupSuccess(resp.data))
            })
            .catch(error => {
                dispatch(CustomerSignupFailure());
            });
    };
};
export const logout = () => {
	return {
		type: 'LOGOUT'
	}
};