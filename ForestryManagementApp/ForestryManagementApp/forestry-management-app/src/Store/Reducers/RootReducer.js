import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import SignupReducer from './Signupreducer';
import OrderReducer from './OrderReducer';
import LandReducer from './LandReducer';
import ContractReducer from './ContractReducer';
import SchedulerReducer from './SchedulerReducer';
import ProductReducer from './ProductReducer';
import  CustomerReducer from './CustomerReducer';
import CustomerSignUpReducer from './CustomerSignUpReducer';
import AdminReducer from './AdminReducer'

const rootReducer=combineReducers({
    LoginReducer,
    SignupReducer,
    CustomerSignUpReducer,
    OrderReducer,
    LandReducer,
    ContractReducer,
    SchedulerReducer,
    ProductReducer,
    CustomerReducer,
    AdminReducer
})
export default rootReducer;