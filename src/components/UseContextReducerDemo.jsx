import React, {useReducer} from 'react'
import {Provider} from './HOOKS/UseContext';
import UserDisplay from './UserDisplay'


function UseContextReducerDemo() {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD': {
                return [...state, action.payload]
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <div>
            <Provider value={{dispatch, state}}>
                <UserDisplay />
            </Provider>
        </div>
    )
}

export default UseContextReducerDemo
