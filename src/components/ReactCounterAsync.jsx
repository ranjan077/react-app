import React,{lazy, Suspense} from 'react';

function ReactCounterAsync() {
    const Counter = lazy(() => {
        return import('./CounterLazyLoaded');
    })
    return (
        <div>
            <Suspense fallback={<div>Loding...</div>}>
                <Counter initialCount={1}/>
            </Suspense>
        </div>
    )
}

export default ReactCounterAsync
