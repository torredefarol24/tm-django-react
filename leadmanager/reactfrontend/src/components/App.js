import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Header from './layouts/header'
import Dashboard from './leads/Dashboard'
import Alert from './layouts/alerts'
import store from '../store-management/store'
import {Provider } from 'react-redux'
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const alertOpts = {
	timeout : 2500,
	position : 'top center'
}

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} alertOptions={alertOpts}>
					<Fragment>
						<Header></Header>
						<div className='container'>
							<Alert></Alert>
							<Dashboard></Dashboard>
						</div>
					</Fragment>
				</AlertProvider>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'))