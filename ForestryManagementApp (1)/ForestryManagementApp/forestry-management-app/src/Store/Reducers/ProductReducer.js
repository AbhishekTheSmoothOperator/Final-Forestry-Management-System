const initialState = {
    products: [],
    isUpdated:false,
    isAdded:false
}

export default function ProductReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Products_Success':
            return {
                ...state,
                products: action.products
            }
        case 'Fetch_Product_Success':
            return {
                ...state,
                products: action.products
            }
        case 'Create_Product_Success':
            return{
                ...state,
                newProduct: action.payload,
                isAdded:true
            }
        case 'Update_Product_Success':
            return{
                ...state,
                products: action.payload,
                isUpdated:true
            }
        case 'Delete_Product_Success':
            return{
                ...state,
                products: action.products
            }      
        default:
            return state;

    }
}