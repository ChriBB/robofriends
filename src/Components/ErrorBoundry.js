import React, { Component }from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

componenyDidCatch(error, info) {
	this.setState({ hassError: true })
}

render() {
		if (this.state.hasError) {
			return <h1>Ooops. Thay is not good</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;