import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Application Reducer
import { productListReducer, productDetailsReducer } from './products/productReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const initialState = {}

const middleware = [thunk]

export const ReduxStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)