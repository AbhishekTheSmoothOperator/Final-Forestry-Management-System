import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

// Sync Action
export const fetchAllLandsSuccess = (lands) => {

    return {
        type: 'Fetch_All_Lands_Success',
        lands
    }
};
export const fetchLandSuccess = (lands) => {

    return {
        type: 'Fetch_Land_Success',
        lands
    }
};

//Async Action
export const fetchAllLands = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/lands/getalllands')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllLandsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchLandById = (landId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/lands/getland/'+landId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchLandSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const createLandSuccess = (land) => {
    return {
        type: 'Create_Land_Success',
        payload: land
    }
};
 
export const createLand = (payload) => {
    let data = {
        landId: payload.landId,
        surveyNumber: payload.surveyNumber,
        ownerName: payload.ownerName,
        landArea: payload.landArea
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/lands/addland", data)
            .then(response => {
                dispatch(createLandSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const updateLandSuccess = (land) => {
    return {
        type: 'Update_Land_Success',
        payload: land
    }
};
export const updateLand = (payload,landId) => {
    let data = {
        landId: payload.landId,
        surveyNumber: payload.surveyNumber,
        ownerName: payload.ownerName,
        landArea: payload.landArea
    }
   
    return (dispatch) => {
        return Axios.put(apiUrl + "/lands/updateland/"+landId,data)
            .then(response => {
                dispatch(updateLandSuccess(response.data))
            })
        .catch(error => {
            throw (error);
        });
    };
};

export const deleteLandSuccess = (lands) => {

    return {
        type: 'Delete_Land_Success',
        lands
    }
};

export const deleteLand = (landId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    console.log(landId)
    return (dispatch) => {
        // Returns a promise
        return Axios.delete(apiUrl + '/lands/deleteland/'+landId.toString())
            .then(resp => {
                // Dispatch another action
                // to consume data            
                console.log(resp.data)  
                dispatch(deleteLandSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};