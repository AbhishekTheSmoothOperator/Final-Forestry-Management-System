const initialState = {
    contracts: [],
    selectedcontracts:[],
    isUpadted:false,
    isAdded:false
}

export default function ContractReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Contracts_Success':
            return {
                ...state,
                contracts: action.contracts
            }
        case 'Fetch_Contract_Success':
            return {
                ...state,
                contracts: action.contracts
            }
        case 'Fetch_Contract_By_Id_Success':
            return {
                ...state,
                selectedcontracts: action.contracts
            }
        case 'Create_Contract_Success':
            return{
                ...state,
                newContract: action.payload,
                isAdded:true
            }
        case 'Update_Contract_Success':
            return{
                ...state,
                contracts: action.payload,
                isUpadted:true
            }
        case 'Delete_Contract_Success':
            return{
                ...state,
                contracts: action.contracts
            }      
        default:
            return state;

    }
}