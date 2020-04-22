import React,{useState} from 'react';
import ReactCounterAsync from './ReactCounterAsync';


function ReactLazyLoadComp() {
    const [load, setLoad] = useState(false);
    const lazyLoadCounterComp = () => {
        setLoad(true);
    }
    return (
        <div>
            {load && <ReactCounterAsync/>}
            <button onClick={(e) => {lazyLoadCounterComp()}}>Load counter component</button>
        </div>
    )
}

export default ReactLazyLoadComp
