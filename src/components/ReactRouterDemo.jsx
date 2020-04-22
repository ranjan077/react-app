import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';
import PDP from './PDP';
import styles from './css/ReactRouterDemo.module.css';

function ReactRouterDemo() {
    return (
        <div>
            <BrowserRouter>
                <nav className={styles['nav-container']}>
                    <div>
                        <Link to='/'>Home</Link> 
                    </div>
                    <div>
                        <Link to='/Gallery'>Gallery</Link> 
                    </div>
                    <div>
                        <Link to='/PDP'>PDP</Link> 
                    </div>
                </nav>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/Gallery'  exact component={Gallery}></Route>
                    <Route path='/PDP'  exact component={PDP}></Route>
                    <Route path='/PDP/:id'  component={PDP}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouterDemo;
