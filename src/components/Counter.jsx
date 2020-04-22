import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);
    if(!Number.isInteger(props.initialCount)) {
        throw new Error('Initial value for the counter should be an integer.');
    }
    return (
        <div>
            Count is {count}
            <div>
                <button onClick={(e) => {setCount(count +1 )}}>Increment</button>
            </div>
        </div>
    )
}

export default React.memo(Counter);
