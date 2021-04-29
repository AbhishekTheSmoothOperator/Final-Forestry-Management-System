import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllCustomersSuccess = (customers) => {

    return {
        type: 'Fetch_All_Customers_Success',
        customers
    }
};
export const fetchCustomerSuccess = (customers) => {

    return {
        type: 'Fetch_Customer_Success',
        customers
    }
};

//Async Action
export const fetchAllCustomers = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/customers/getallcustomers')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllCustomersSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchCustomerById = (customerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/customers/getcustomer/'+customerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchCustomerSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createCustomerSuccess = (customer) => {
    return {
        type: 'Create_Customer_Success',
        payload: customer
    }
};
 
export const createCustomer = (payload) => {
    let data = {
        customerId: payload.customerId,
        customerName: payload.customerName,
        customerPassword: payload.customerPassword,
        customerEmail: payload.customerEmail,
        customerAddress: payload.customerAddress,
        customerTown: payload.customerTown,
        customerPostalCode: payload.customerPostalCode,
        customerContact: payload.customerContact
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/customers/addcustomer", data)
            .then(response => {
                dispatch(createCustomerSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateCustomerSuccess = (customer) => {
    return {
        type: 'Update_Customer_Success',
        payload: customer
    }
};
export const updateCustomer = (payload,customerId) => {
    let data = {
        customerId: payload.customerId,
        customerName: payload.customerName,
        customerEmail: payload.customerEmail,
        customerAddress :payload.customerAddress,
        customerTown :payload.customerTown,
        customerPostalCode :payload.customerPostalCode,
        customerContact : payload.customerContact
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/customers/updatecustomer/"+customerId,data)
            .then(response => {
                dispatch(updateCustomerSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteCustomerSuccess = (customers) => {

    return {
        type: 'Delete_Customer_Success',
        customers
    }
};

export const deleteCustomer = (customerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/customers/deletecustomer/'+customerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(deleteCustomerSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchCustomerNameSuccess = (customers) => {

    return {
        type: 'Fetch_Customer_Name_Success',
        customers
    }
};

export const fetchCustomerByName = (customerName) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/customers/getcustomerByCustomerName/'+customerName)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchCustomerNameSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};