const initialState = {
    products: []
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
                newProduct: action.payload
            }
        case 'Update_Product_Success':
            return{
                ...state,
                products: action.payload
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