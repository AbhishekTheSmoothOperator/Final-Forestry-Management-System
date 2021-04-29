const initialState = {
    customers: [],
    customer:undefined,
    isUpdated:false,
    isAdded:false
}

export default function CustomerReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Customers_Success':
            return {
                ...state,
                customers: action.customers
            }
        case 'Fetch_Customer_Success':
            return {
                ...state,
                customer: action.customers
            }
        case 'Create_Customer_Success':
            return{
                ...state,
                newCustomer: action.payload,
                isAdded:true
            }
        case 'Update_Customer_Success':
            return{
                ...state,
                customers: action.payload,
                isUpdated:true
            }
        case 'Delete_Customer_Success':
            return{
                ...state,
                customers: action.customers
            }    
    
        case 'Fetch_Customer_Name_Success':
            return {
                ...state,
                customers: action.customers
            }
        default:
            return state;

    }
}