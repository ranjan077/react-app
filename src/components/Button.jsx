import React from 'react'
import CounterHOC from './HOC/CounterHOC';

function Button(props) {
    return (
        <div>
            <button {...props}>{props.name} {props.children}</button>
        </div>
    )
}

export default CounterHOC(Button);
