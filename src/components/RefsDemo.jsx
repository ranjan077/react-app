import React, { Component, Fragment } from 'react';
import Input, {Inputfn} from './Input'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.inputCallbackRef = null;
        this.refClass = React.createRef();
        this.refForward= React.createRef();
    }
    focusInput() {
        this.inputRef.current.focus();
    }
    focusCallBackInput() {
        this.inputCallbackRef && this.inputCallbackRef.focus();
    }

    focusClassRefInput() {
        this.refClass.current.focusInput();
    }

    focusForwardRefInput() {
        this.refForward.current.focus();
    }
    render() {
        return (
            <Fragment>
                <div>
                    <h2>Using ref</h2>
                    <input ref={this.inputRef}></input>
                    <button onClick={() => { this.focusInput() }}>Focus input</button>
                </div>
                <div>
                    <h2>Using call back ref</h2>
                    <input ref={(element) => this.inputCallbackRef = element}></input>
                    <button onClick={() => { this.focusCallBackInput() }}>Focus input</button>
                </div>
                <div>
                    <h2>Using ref for class component</h2>
                    <Input ref={this.refClass}/> {// Note: ref cant be used on functional component}
                    }
                    <button onClick={() => { this.focusClassRefInput() }}>Focus input</button>
                </div>
                <div>
                    <h2>Ref forwarding</h2>
                    <Inputfn ref={this.refForward}/> {// Note: ref cant be used on functional component}
                    }
                    <button onClick={() => { this.focusForwardRefInput() }}>Focus input</button>
                </div>
            </Fragment>
           
        )
    }
}
