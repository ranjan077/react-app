import React from 'react'
import {context} from './UseContextDemo'

function User() {
    return (
        <context.Consumer>
            {
                (user) => {
                    return (
                        <div>
                            <p>name: {user.name}</p>
                            <p>age: {user.age}</p>
                        </div>
                    )
                }
            }
        </context.Consumer>
       
    )
}

export default User
