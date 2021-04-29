import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllContractsSuccess = (contracts) => {

    return {
        type: 'Fetch_All_Contracts_Success',
        contracts
    }
};
export const fetchContractSuccess = (contracts) => {

    return {
        type: 'Fetch_Contract_Success',
        contracts
    }
};
export const fetchContractByIdSuccess = (contracts) => {

    return {
        type: 'Fetch_Contract_By_Id_Success',
         contracts
    }
};

//Async Action
export const fetchAllContracts = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/contracts/getallContracts')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllContractsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchContractByNumber = (contractNumber) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/contracts/getContractByContractNumber/'+contractNumber)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchContractSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchContractById = (customerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/contracts/getcontractbycustomerid/'+customerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchContractByIdSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createContractSuccess = (contract) => {
    return {
        type: 'Create_Contract_Success',
        payload: contract
    }
};
 
export const createContract = (payload) => {
    let data = {
        contractNumber: payload.contractNumber,
        deliveryPlace: payload.deliveryPlace,
        deliveryDate: payload.deliveryDate,
        quantity: payload.quantity,
        customer: payload.customer,
        scheduler:payload.scheduler,
        order:payload.order
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/contracts/addcontract", data)
            .then(response => {
                dispatch(createContractSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateContractSuccess = (contract) => {
    return {
        type: 'Update_Contrct_Success',
        payload: contract
    }
};
export const updatecontract = (payload,contractNumber) => {
    let data = {
        contractNumber: contractNumber,
        deliveryPlace: payload.deliveryPlace,
        deliveryDate: payload.deliveryDate,
        quantity: payload.quantity,
        customer: payload.customer,
        scheduler:payload.scheduler,
        order:payload.order
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/contracts/updatecontract/"+contractNumber,data)
            .then(response => {
                dispatch(updateContractSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteContractSuccess = (contracts) => {

    return {
        type: 'Delete_Contract_Success',
        contracts
    }
};

export const deleteContract = (contractNumber) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/contracts/deletecontract/'+contractNumber)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(deleteContractSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};