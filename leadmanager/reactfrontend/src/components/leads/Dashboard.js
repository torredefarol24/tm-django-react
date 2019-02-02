import React, {Fragment} from 'react'
import Form from './Form'
import Leads from './Leads'

const Dashboard = () => {
	return (
		<Fragment>
			<div className='row'>
				<div className='col-md-4'>
					<h3> Add new Lead</h3>
					<Form/>
				</div>
				<div className='col-md-8'>
					<h3> Current Leads</h3>
					<Leads></Leads>
				</div>
			</div>
			
		</Fragment>
	)
}

export default Dashboard