import rootReducer from '../reducer/rootReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware} from 'redux'
import { createStore } from 'redux'
const middleware = [thunk]

const initialState = {
    todoReducer:{
        list : localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
    }
    
        
    
}
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) 

export default store;