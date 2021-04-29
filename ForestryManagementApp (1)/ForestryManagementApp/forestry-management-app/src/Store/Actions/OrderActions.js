import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllOrdersSuccess = (order) => {

    return {
        type: 'Fetch_All_Orders_Success',
        order
    }
};
export const fetchOrderSuccess = (orders) => {

    return {
        type: 'Fetch_Order_Success',
        orders
    }
};

//Async Action
export const fetchAllOrders = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/orders/getallorders')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllOrdersSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchOrderByNumber = (orderNumber) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/orders/getOrder/'+orderNumber)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchOrderSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createOrderSuccess = (order) => {
    return {
        type: 'Create_Order_Success',
        payload: order
    }
};
 
export const createOrder = (payload) => {
    let data = {
        orderNumber: payload.orderNumber,
        deliveryPlace: payload.deliveryPlace,
        deliveryDate: payload.deliveryDate,
        quantity: payload.quantity,
        customerId: payload.customerId,
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/orders/addorder", data)
            .then(response => {
                dispatch(createOrderSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateOrderSuccess = (order) => {
    return {
        type: 'Update_Order_Success',
        payload: order
    }
};
export const updateorder = (payload) => {
    let data = {
        orderNumber: payload.orderNumber,
        deliveryPlace: payload.deliveryPlace,
        deliveryDate: payload.deliveryDate,
        quantity: payload.quantity,
        customerId: payload.customerId
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/orders/updateorder/"+data.orderNumber,data)
            .then(response => {
                dispatch(updateOrderSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteOrderSuccess = (orders) => {

    return {
        type: 'Delete_Order_Success',
        orders
    }
};

export const deleteOrder = (orderNumber) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/orders/deleteorder/'+orderNumber)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(deleteOrderSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createProductSuccess = (order) => {
    return {
        type: 'Create_Product_Success',
        payload: order
    }
};
 
export const createProduct = (payload) => {
    let data = {
        productId:payload.productId,
        orderNumber:payload.orderNumber
    }
    let data2 = {
        productId:payload.productId,
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/orders/addproduct/"+data.orderNumber,data2)
            .then(response => {
                dispatch(createProductSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};
export const fetchOrderByIdSuccess = (orders) => {

    return {
        type: 'Fetch_Order_By_Id_Success',
         orders
    }
};
export const fetchOrderById = (customerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/orders/getorderbycustomerid/'+customerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchOrderByIdSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};