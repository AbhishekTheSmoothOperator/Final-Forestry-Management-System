const initialState = {
    schedulers: [],
    isAdded:false,
    isUpdated:false
}

export default function SchedulerReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Schedulers_Success':
            return {
                ...state,
                schedulers: action.schedulers
            }
        case 'Fetch_Scheduler_Success':
            return {
                ...state,
                schedulers: action.schedulers
            }
        case 'Create_Scheduler_Success':
            return{
                ...state,
                newScheduler: action.payload,
                isAdded:true
            }
        case 'Update_Scheduler_Success':
            return{
                ...state,
                schedulers: action.payload,
                isUpdated:true
            }
        case 'Delete_Scheduler_Success':
            return{
                ...state,
                schedulers: action.schedulers
            }      
        default:
            return state;

    }
}