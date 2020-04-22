import React, { Component } from 'react'

export default class Quantity extends Component {
    constructor(props) {
        super(props)
        this.containerRef = document.getElementById('msgbox');
        this.createPara('Component constructor');
        this.state = { hasError: false };
    }
    createPara(msg) {
        const para = document.createElement("P");   
        para.innerText = msg;
        this.containerRef.appendChild(para); 
    }
    static getDerivedStateFromProps(props) {
        const {num} = props;
        const para = document.createElement("P"); 
        debugger;  
        para.innerText = 'Component getDerivedStateFromProps';
        document.getElementById('msgbox').appendChild(para); 
        if(isNaN(Number(num))) {
            throw new Error('Quantity should be number');
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.createPara('Component shouldComponentUpdate');
        return true;
    }
    
    render() {
        this.createPara('Component render');
        return (
            <div>
                Quantity:<input type="number"/>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        this.createPara('Component getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createPara('Component did Update');
    }
    componentDidMount() {
        this.createPara('Component did mount');
    }
    componentWillUnmount() {
        this.createPara('Component did un mount');
    }

    static getDerivedStateFromError(error) {
        this.createPara('Component error');
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        this.createPara('Component did catch error');
    }
}
