const initialState = {
    schedulers: []
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
                newScheduler: action.payload
            }
        case 'Update_Scheduler_Success':
            return{
                ...state,
                schedulers: action.payload
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