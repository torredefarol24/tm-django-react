import React , {Fragment}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LeadsActions from '../../store-management/actions/leads'

const mapDispatchToProps = (dispatch) => {
	return {
		addLead : (lead) => dispatch(LeadsActions.addLead(lead))
	}
}

class Form extends React.Component {
	state = {
		name : "",
		email : "",
		message : ""
	}

	handleFormSubmit(event){
		event.preventDefault()
		this.props.addLead(this.state)
	}

	handleNameChange(event){
		this.setState({
			name : event.target.value
		})
	}

	handleEmailChange(event){
		this.setState({
			email : event.target.value
		})	
	}

	handleMessageChange(event){
		this.setState({
			message : event.target.value
		})	
	}


	render(){
		return(
			<Fragment>
				<form onSubmit = {this.handleFormSubmit.bind(this)}>
					<div className="form-group">
						<label >Name</label>
						<input type="text" className="form-control" placeholder="Enter Name" defaultValue={this.state.name} onChange={this.handleNameChange.bind(this)}/>
					</div>
					<div className="form-group">
						<label >Email</label>
						<input type="email" className="form-control" placeholder="Enter email" defaultValue={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
					</div>
					<div className="form-group">
						<label >Message</label>
						<input type="text" className="form-control" placeholder="Enter Message" defaultValue={this.state.message} onChange={this.handleMessageChange.bind(this)}/>
					</div>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

			</Fragment>
		)
	}
}

const ConnectedForm = connect(null, mapDispatchToProps)(Form)
export default ConnectedForm