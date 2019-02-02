import BASE from './base_urls'

const LeadsEndpoints = {
	GET_ALL : `${BASE.APP_HOST}/api/leads`,
	DELETE_BY_ID : `${BASE.APP_HOST}/api/leads`,
	CREATE_LEAD : `${BASE.APP_HOST}/api/leads/`
}

export default LeadsEndpoints