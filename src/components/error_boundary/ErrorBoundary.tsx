import React, { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component<{}, { hasError: boolean }> {
	constructor(props: object) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Errooooor</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
