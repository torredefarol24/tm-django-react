import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LeadsActions from '../../store-management/actions/leads'

const mapStateToProps = (state) => {
	return {
		leads : state.leadsReducer.leads
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllLeads : () => dispatch(LeadsActions.getLeads),
		deleteLead : (id) => dispatch(LeadsActions.deleteLead(id))
	}
}

class Leads extends React.Component {
	static propTypes = {
		leads : PropTypes.array.isRequired,
		getAllLeads : PropTypes.func.isRequired,
		deleteLead : PropTypes.func.isRequired
	}

	componentDidMount(){
		this.props.getAllLeads()
	}

	render(){
		return(
			<Fragment>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Message</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.leads.map(lead => {
								return <tr key = {lead.id}>
									<td>{lead.id}</td>
									<td>{lead.name}</td>
									<td>{lead.email}</td>
									<td>{lead.message}</td>
									<td>
										<button className='btn btn-danger' onClick={ this.props.deleteLead.bind(this, lead.id)}>Delete</button>
									</td>
								</tr>
							})
						}
					</tbody>
				</table>
			</Fragment>
		)
	}
}

const ConnectedLeads = connect(mapStateToProps, mapDispatchToProps)(Leads)

export default ConnectedLeads