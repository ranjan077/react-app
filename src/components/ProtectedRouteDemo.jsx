import React, {useState} from 'react'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from "react-router";

const Header = styled.div`
    display: flex;
    height: 35px;
    

`
const NavLink = styled.div`
    flex-basis: 32.8%;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    a { background: darkkhaki;
        flex-basis: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    a.active {
        background-color: beige;
    }
`
function ProtectedRouteDemo() {
    const [activeTab,  setActiveTab] =  useState('welcome');
    
    return (
        <>
          <BrowserRouter>
            <Header>
                <NavLink>
                        <Link to="/welcome" className={activeTab === 'welcome' ? 'active': ''} onClick={() => {
                            setActiveTab('welcome');
                        }}>Welcome</Link>
                </NavLink>
                <NavLink>
                    <Link to="/account" className={activeTab === 'account' ? 'active': ''} onClick={() => {
                            setActiveTab('account');
                        }}>Account</Link>
                </NavLink>
                <NavLink>
                    <Link to="/help" className={activeTab === 'help' ? 'active': ''} onClick={() => {
                            setActiveTab('help');
                        }}>Help</Link>
                </NavLink>
            </Header>
                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/welcome" exact component={Welcome}/>
                    <ProtectedRoute path="/account" exact component={Account} setActiveTab={setActiveTab}/ >
                    <Route path="/help" exact component={Help}/>
                    <Route path="/author/:author" exact component={Author}/>
                </Switch>
            </BrowserRouter>
        </>
        
    )
}

function Welcome() {
    return (
        <>
            <h3>Welcome page</h3>
            <p>Please logion to acess account page</p>
            <button onClick={() => {auth.login()}}>Login</button>
        </>
    )
}

function Account(props) {
    return (
        <>
             <h3>Account page</h3>
            <button onClick={() => {
                auth.logout()
                props.setActiveTab('welcome');
                }}>Logout</button>
        </>
    )
}

function Help({history}) {
    const getAuthor = () => {
        history.push('/author/Ranjan');
    }
    return (
        <>
            <h3>Help page</h3>
            <button onClick={getAuthor}>Get author</button>
        </>
        
    )
}

function Author({match}) {
    const author = match.params.author || 'DefaultAuthor';
    const AuthorAdrresWithRouter = withRouter(AuthorAdrres);
    return (
        <>
            <h3>Author is {author}</h3>
            <AuthorAdrresWithRouter/>
        </>
        
    )
}

function AuthorAdrres({match}) {
     const author = match.params.author || 'DefaultAuthor';
    return (
        <div>
            Author {author} : Bangalore
        </div>
    )
}


function ProtectedRoute({ component: Component, setActiveTab, ...restProps }) {
    return (<Route {...restProps} render={(props) => {
        if(auth.isLoggedin()) {
            return <Component {...props} setActiveTab={setActiveTab}/>
        }
        setActiveTab('welcome');
        return <Redirect to="welcome"/>
    }} />)
}
class Auth {
    constructor() {
        this.state = {
            isLoggedin: false
        }
    }

    login() {
        this.state.isLoggedin = true;
    }

    isLoggedin() {
        return this.state.isLoggedin;
    }

    logout() {
        this.state.isLoggedin = false;
    }
}
const auth = new Auth();

export default ProtectedRouteDemo
