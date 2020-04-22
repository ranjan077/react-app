import React, { Component } from 'react'
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            msg: ''
        }
    }
    static getDerivedStateFromError(error) {
        return {
            error: true,
            msg: 'Something went wrong'
        }
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
      }
    render() {
        if(this.state.error) {
            return (<div> {this.state.msg}</div>)
        }
        return <div className="micro-app-container">{this.props.children}</div>
    }
}
