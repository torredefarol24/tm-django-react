import LEAD_TYPES from '../action_types/leadTypes'
import LeadsEndpoints from '../endpoint_urls/leads'
import axios from 'axios'

const getAllLeads = () => dispatch => {
	axios.get(LeadsEndpoints.GET_ALL)
	.then( result => {
		var action = {
			type : LEAD_TYPES.GET_LEADS,
			payload : result.data
		}
		dispatch(action)
	})
	.catch(err => {
		console.error(err)
	})
}

const deleteLeadById = (id) => dispatch => {
	var endpoint = `${LeadsEndpoints.DELETE_BY_ID}/${id}`
	axios.delete(endpoint)
	.then( result => {
		var action = {
			type : LEAD_TYPES.DELETE_LEAD,
			payload : id
		}
		dispatch(action)
	})
	.catch(err => {
		console.error(err)
	})
}

const addLead = (lead) => dispatch => {
	var reqOpts = {
		headers : {
			"Content-Type" : "application/json"
		}
	}
	axios.post(LeadsEndpoints.CREATE_LEAD, JSON.stringify(lead), reqOpts)
	.then( result => {
		var action = {
			type : LEAD_TYPES.ADD_LEAD,
			payload : result.data
		}
		dispatch(action)
	})
	.catch(err => {
		console.error(err.response.data)
		var errorPayload = {
			message : err.response.data,
			status : err.response.status
		}

		var action = {
			type : LEAD_TYPES.GET_ERRORS,
			payload : errorPayload
		}
		dispatch(action)
	})
}

const LeadActions = {
	getLeads : getAllLeads(),
	deleteLead : deleteLeadById,
	addLead : addLead
}

export default LeadActions