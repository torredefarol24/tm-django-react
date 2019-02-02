import React, {Component, Fragment} from 'react'
import {withAlert} from 'react-alert'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
	return {
		error : state.errorsReducer
	}
}

class Alert extends Component {

	static PropTypes = {
		error : PropTypes.object.isRequired
	}

	componentDidUpdate(prevProps){
		console.log("PREVpROPS", prevProps)

		if (this.props.error !== prevProps.error){
			if (this.props.error.message.name ){
				this.props.alert.error(`Name : ${this.props.error.message.name.join()}`)
			}

			if (this.props.error.message.email ){
				this.props.alert.error(`Email : ${this.props.error.message.email.join()}`)		
			}

			if (this.props.error.message.message ){
				this.props.alert.error(`Message : ${this.props.error.message.message.join()}`)		
			}
		}
	}

	render(){
		return (
			<Fragment>
			</Fragment>
		)
	}
}

const ConnectedAlert = connect(mapStateToProps)(withAlert(Alert))
export default ConnectedAlert