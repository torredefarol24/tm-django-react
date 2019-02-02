import {combineReducers} from 'redux'
import LeadsReducer from './leads'

const reducers = {
	leadsReducer : LeadsReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer