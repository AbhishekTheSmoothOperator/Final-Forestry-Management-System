import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8095';

export const fetchAdminSuccess = (admins) => {

    return {
        type: 'Fetch_Admin_Success',
        admins
    }
};

export const fetchAdminByName = (adminName) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/admins/getAdminByAdminName/'+adminName)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAdminSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};