const initialState = {
    order: [],
    orders:undefined,
    isAdded:false
}

export default function OrderReducer(state = initialState, action) {

    switch (action.type) {

        case 'Fetch_All_Orders_Success':
            return {
                ...state,
                order: action.order
            }
        case 'Fetch_Order_Success':
            return {
                ...state,
                order: action.orders
            }
        case 'Create_Order_Success':
            return{
                ...state,
                newOrder: action.payload
            }
        case 'Update_Order_Success':
            return{
                ...state,
                order: action.payload
            }
        case 'Delete_Order_Success':
            return{
                ...state,
                order: action.orders
            }
        case 'Create_Product_Success':
            return{
                ...state,
                order: action.orders,
                isAdded:true
            }
        case 'Fetch_Order_By_Id_Success':
            return{
                ...state,
                orders: action.orders
            }
        default:
            return state;

    }
}