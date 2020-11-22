import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Application Reducer
import { productListReducer, productDetailsReducer } from './products/productReducer'
import { cartReducer } from './cart/cartReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')): []

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

export const ReduxStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)