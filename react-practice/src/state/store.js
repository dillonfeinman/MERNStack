import {combineReducers,  applyMiddleware }  from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import userReducer from './User/UserReducer'
import productReducer from './Product/ProductReducer';
import cartReducer from './Cart/CartReducer'

const rootReducer = combineReducers({
    userReducer,
    productReducer,
    cartReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},//initial state
    applyMiddleware(thunk)
)