import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    focusInput() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                return <input ref={this.inputRef} type='text'/>
            </div>
        )
    }
}

export const Inputfn = React.forwardRef((props, ref) => {
    return <input ref={ref}></input>
});
