import LEAD_TYPES from '../action_types/leadTypes'

const initialState = {
	message : {},
	status : null
}

const ErrorReducer = (state = initialState, action) => {
	switch(action.type){
		case LEAD_TYPES.GET_ERRORS:
			return {
				message : action.payload.message,
				status : action.payload.status
			}
		default : 
			return state
	}
}

export default ErrorReducer