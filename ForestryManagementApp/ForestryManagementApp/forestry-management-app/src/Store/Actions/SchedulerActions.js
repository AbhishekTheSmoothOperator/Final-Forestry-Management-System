import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllSchedulersSuccess = (schedulers) => {

    return {
        type: 'Fetch_All_Schedulers_Success',
        schedulers
    }
};
export const fetchSchedulerSuccess = (schedulers) => {

    return {
        type: 'Fetch_Scheduler_Success',
        schedulers
    }
};

//Async Action
export const fetchAllSchedulers = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/schedulers/getallschedulers')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllSchedulersSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchSchedulerByNumber = (schedulerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/schedulers/getscheduler/'+schedulerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchSchedulerSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createSchedulerSuccess = (scheduler) => {
    return {
        type: 'Create_Scheduler_Success',
        payload: scheduler
    }
};
 
export const createScheduler = (payload) => {
    let data = {
        schedulerId: payload.schedulerId,
        schedulerName: payload.schedulerName,
        schedulerContact: payload.schedulerContact,
        truckNumber: payload.truckNumber,
        orderNumber: payload.orderNumber
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/schedulers/addscheduler", data)
            .then(response => {
                dispatch(createSchedulerSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateSchedulerSuccess = (scheduler) => {
    return {
        type: 'Update_Scheduler_Success',
        payload: scheduler
    }
};
export const updatescheduler = (payload,schedulerId) => {
    let data = {
        schedulerId: schedulerId,
        schedulerName: payload.schedulerName,
        schedulerContact: payload.schedulerContact,
        truckNumber: payload.truckNumber,
        orderNumber: payload.orderNumber
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/schedulers/updatescheduler/"+schedulerId,data)
            .then(response => {
                dispatch(updateSchedulerSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteSchedulerSuccess = (schedulers) => {

    return {
        type: 'Delete_Scheduler_Success',
        schedulers
    }
};

export const deleteScheduler = (schedulerId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/schedulers/deletescheduler/'+schedulerId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(deleteSchedulerSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};