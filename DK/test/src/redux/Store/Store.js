// redux
import { compose, createStore, applyMiddleware } from 'redux';
// importing redux-logger
import { logger } from 'redux-logger';
// importing Redux-thunk
import thunkMiddleware from 'redux-thunk';
// importing reducer combine
import combineReducers from '../Reducer/CombineReducer';
// importing user action constant
import {userAction } from "../Constant/Constant"

const rootReducer = (state, payload) => {
    if (payload.type === userAction.LOGOUT) {
        payload = undefined
    }

    return combineReducers(state, payload)
}
const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger
    ),
)
// configure to the store
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}