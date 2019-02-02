import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Header from './layouts/header'
import Dashboard from './leads/Dashboard'

class App extends React.Component{
	render(){
		return (
			<Fragment>
				<Header></Header>
				<div className='container'>
					<Dashboard></Dashboard>
				</div>
			</Fragment>
			
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'))