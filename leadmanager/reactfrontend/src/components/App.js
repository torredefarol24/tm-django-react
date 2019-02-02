import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layouts/header'

class App extends React.Component{
	render(){
		return (
			<div className='container'>
				<Header></Header>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'))