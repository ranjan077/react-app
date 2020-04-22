import React, { useRef, useContext} from 'react'
import Context from './HOOKS/UseContext'

function UserDisplay() {
    const props = useContext(Context);
    const nameRef = useRef();
    const ageRef = useRef();
    const formSubmit = (e, dispatch) => {
        e.preventDefault();
        if(nameRef.current.value && ageRef.current.value ) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameRef.current.value,
                    age: ageRef.current.value
                }
            })
        }
    }
    return (
        <div>
            <div>
                <h3> users useReducer and useContext </h3>
                {
                    props.state.map((user, index) => {
                        return (
                            <div key={index}>
                                <span>User:{user.name}</span>
                                <span>Age{user.age}</span>
                            </div>
                        )
                    })
                }
            </div>
            <form onSubmit={e => formSubmit(e, props.dispatch)}> 
                <label>User</label><input type='text' ref={nameRef}/>
                <label>age</label><input type='text' ref={ageRef}/>
                <input type='submit' value="Submit"/>
            </form>
        </div>
    )
}

export default UserDisplay
