import LEAD_TYPES from '../action_types/leadTypes.js'

const initialState = {
	leads : []
}

const LeadsReducer = (state = initialState, action) => {
	switch(action.type) {
		case LEAD_TYPES.GET_LEADS:
			return {
				...state, leads : action.payload
			}
		case LEAD_TYPES.DELETE_LEAD:
			var filtered = state.leads.filter( lead => lead.id != action.payload)
			return {
				...state, leads : filtered
			}
		case LEAD_TYPES.ADD_LEAD : 
			return {
				...state, leads : [...state.leads, action.payload]
			}
		default: 
			return state
	}
}

export default LeadsReducer