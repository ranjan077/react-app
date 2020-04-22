import React, {Fragment, Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Quantity from './Quantity'

class ReactComponentLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mount: false,
            num: 1,
        }
    }
    
    setMount = (mount) => {
        this.setState({
            mount,
            num: 1,
        });
    }
    setNum = (num) => {
        this.setState({
            num,
        });
    }
    render() {
        const {mount, num} = this.state;
        return (
                <Fragment>
                    
                    <div>
                        {
                            mount  && <ErrorBoundary><Quantity num={num} /></ErrorBoundary>
                        }
                    </div>
                    <div>
                        <button onClick={() => {
                            document.getElementById('msgbox').querySelectorAll('*').forEach(n => n.remove());
                            this.setMount(true)}}>Mount</button>
                        <button onClick={() => {
                            document.getElementById('msgbox').querySelectorAll('*').forEach(n => n.remove());
                            this.setNum(num + 1)}}>Update</button>
                        <button onClick={() => {
                            document.getElementById('msgbox').querySelectorAll('*').forEach(n => n.remove());
                            this.setMount(false)}}>Unmount</button>
                        <button onClick={() => {
                            document.getElementById('msgbox').querySelectorAll('*').forEach(n => n.remove());
                            this.setNum('a')}}>Error</button>
                    </div>
                </Fragment>
            );
    }
    
}

export default ReactComponentLifeCycle
