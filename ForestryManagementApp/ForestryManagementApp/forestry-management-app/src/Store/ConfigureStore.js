import { createStore, applyMiddleware}  from 'redux';
import rootReducer  from '../Store/Reducers/RootReducer';
import thunk from 'redux-thunk';
 
/**
 * Create and return the Redux 'store' 
 * that holds the complete state tree of the app
 */
export default function configureStore() {
  return createStore(
    rootReducer  ,
    applyMiddleware(thunk)
  );
};