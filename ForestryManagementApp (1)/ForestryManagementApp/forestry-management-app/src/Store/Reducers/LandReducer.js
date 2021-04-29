const initialState = {
    lands: [],
    isUpdated:false,
    isAdded:false
}

export default function LandReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Lands_Success':
            return {
                ...state,
                lands: action.lands
            }
        case 'Fetch_Land_Success':
            return {
                ...state,
                lands: action.lands
            }
        case 'Create_Land_Success':
            return{
                ...state,
                newLand: action.payload,
                isAdded:true
            }
        case 'Update_Land_Success':
            return{
                ...state,
                lands: action.payload,
                isUpdated:true
            }
        case 'Delete_Land_Success':
            return{
                ...state,
                lands: action.lands
            }      
        default:
            return state;

    }
}