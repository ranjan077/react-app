import React, { Component } from 'react'
import Button from './Button'

export default class HigherOrderCompDemo extends Component {
    
    render() {
        return (
            <div>
                <h2>HOC demo</h2>
                <Button name="Ranjan">Increment counter hoc btn</Button>
            </div>
        )
    }
};