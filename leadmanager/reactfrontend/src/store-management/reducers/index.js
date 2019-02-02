import {combineReducers} from 'redux'
import LeadsReducer from './leads'
import ErrorsReducer from './errors'

const reducers = {
	leadsReducer : LeadsReducer,
	errorsReducer : ErrorsReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer