import { createStore, applyMiddleware } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'


import messageReducer from './reducers/messageReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    message: messageReducer,
    filter: filterReducer,
    anecdotes: anecdoteReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store