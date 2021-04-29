import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllProductsSuccess = (products) => {

    return {
        type: 'Fetch_All_Products_Success',
        products
    }
};
export const fetchProductSuccess = (products) => {

    return {
        type: 'Fetch_Product_Success',
        products
    }
};

//Async Action
export const fetchAllProducts = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/products/getallproducts')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllProductsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchProductById = (productId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/products/getProductByProductId/'+productId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchProductSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createProductSuccess = (product) => {
    return {
        type: 'Create_Product_Success',
        payload: product
    }
};
 
export const createproduct = (payload) => {
    let data = {
        productId: payload.productId,
        productName: payload.productName,
        productDescription: payload.productDescription,
        productPrice:payload.productPrice,
        productQuantity: payload.productQuantity
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/products/addproduct", data)
            .then(response => {
                dispatch(createProductSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateProductSuccess = (product) => {
    return {
        type: 'Update_Product_Success',
        payload: product
    }
};
export const updateproduct = (payload,productId) => {
    let data = {
        productId: productId,
        productName: payload.productName,
        productDescription: payload.productDescription,
        productQuantity: payload.productQuantity,
        productPrice: payload.productPrice
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/products/updateproduct/"+productId,data)
            .then(response => {
                dispatch(updateProductSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteProductSuccess = (products) => {

    return {
        type: 'Delete_Product_Success',
        products
    }
};

export const deleteProduct = (productId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/products/deleteproduct/'+productId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(deleteProductSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};