import {  } from 'react'
import { legacy_createStore , combineReducers, applyMiddleware  } from 'redux'
import { thunk } from 'redux-thunk'
import { filterReducer1 } from './filterReducer1';
import { addToCartReducer } from './addToCartReducer';
import { inputDataShowReducer } from './inputDataShowReducer';
import { whishListreducer } from './whishListreducer';


const rootReducer = combineReducers({
   
    sortFunctionality : filterReducer1,
    cartFunctionality : addToCartReducer,
    searchInput : inputDataShowReducer,
    wishList : whishListreducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)) ; 

