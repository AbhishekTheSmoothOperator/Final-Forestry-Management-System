const initialState = {
    admins: []
}

export default function AdminReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_Admin_Success':
            return {
                ...state,
                admins: action.admins
            }

            default:
                return state;
    
        }
    }