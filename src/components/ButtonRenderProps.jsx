import React from 'react'

function ButtonRenderProps(props) {
    return (
        <div>
            <button onClick={props.incrementCounter}>Increment {props.count}</button>
        </div>
    )
}

export default ButtonRenderProps
