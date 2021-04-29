import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

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
        adminId:payload.adminId,
        adminName: payload.adminName,
        adminPassword:payload.adminPassword
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

export const fetchCustomerSignupSuccess = (customers) => {

    return {
        type: 'Fetch_Customer_Signup_Success',
        customers
    }
};
export const CustomerSignupFailure = () => {
    return {
        type: 'CUSTOMER_SIGNUP_FAILURE'
    }
};

export const doCustomerSignup = (payload) => {
    let data = {
        customerId: payload.customerId,
        customerName:payload.customerName,
        customerPassword:payload.customerPassword,
        customerEmail:payload.customerEmail,
        customerAddress:payload.customerAddress,
        customerTown:payload.customerTown,
        customerPostalCode:payload.customerPostalCode,
        customerContact:payload.customerContact
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/customers/signUp',data)
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