import React from 'react'
import User from './User'
export const context = React.createContext({
    name: 'default',
    age: 0
});

function UseContextDemo() {
    const user = {
        name: 'ranjan',
        age: 34
    }
    return (
        <div>
            <h3>React context demo</h3>
            <context.Provider value={user}>
                <User />
            </context.Provider>
            <User />
        </div>
    )
}

export default UseContextDemo
