import React from 'react'
import RenderPropsComp from './HOC/RenderPropsComp'
import ButtonRenderProps from './ButtonRenderProps'
export default function RenderPropsDemo() {
    return (
        <div>
            <h3>Demoing render props</h3>
            <RenderPropsComp render={(count, incrementCounter) => {
                return <ButtonRenderProps incrementCounter={incrementCounter} count={count}/>
            }}></RenderPropsComp>
        </div>
    )
}
