import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Header from './layouts/header'
import Dashboard from './leads/Dashboard'
import store from '../store-management/store'
import {Provider } from 'react-redux'

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<Fragment>
					<Header></Header>
					<div className='container'>
						<Dashboard></Dashboard>
					</div>
				</Fragment>	
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'))