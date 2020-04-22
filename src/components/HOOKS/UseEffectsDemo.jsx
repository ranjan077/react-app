import React, {useState, useEffect} from 'react'

function UseEffectsDemo(props) {
    const [name, setName] = useState('');
    const [focusCount, setFocusCount] = useState(0);
    useEffect(() => {
        console.log('UseEffectsDemo did mount');
        return () => {
            console.log('UseEffectsDemo did un mount');
        }
    }, []);
    useEffect(() => {
        console.log('UseEffectsDemo did update');
    }, [name])
    console.log('Render method rof UseEffectsDemo unning...');
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} onFocus={(e) => setFocusCount(focusCount + 1)}/> <span>Input value is {name} and focusded {focusCount} </span>
        </div>
    )
}

export default UseEffectsDemo
