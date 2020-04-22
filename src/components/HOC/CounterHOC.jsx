import React from 'react';


const CounterHOC = (Component) => {
    return (class NewComponet extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        setCount = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        render() {
            return (
                <Component {...this.props} onClick={this.setCount}>
                    {this.props.children} {this.state.count}
                </Component>
            )
        }
    });
}
export default CounterHOC

