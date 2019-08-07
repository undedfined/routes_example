import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

const history = createBrowserHistory()

const routes = [
    { path: '/login', component: Login, auth: false },
    { path: '/signup', component: Signup, auth: false },
    { path: '/home', component: Home, auth: true }
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null
        }
    }

    setCurrentUser(currentUser) {
        this.setState({ currentUser })
    }

    render() {
        // <Login changeCurrentUser={this.setCurrentUser.bind(this)} />
        return (
            <Router history={history}>
                <Switch>
                    {
                        routes.map(route => {
                            if (route.auth && this.state.currentUser)
                                return (
                                    <Route
                                        path={route.path}
                                        render={() => <route.component changeCurrentUser={this.setCurrentUser.bind(this)} />}
                                        // component={route.component}
                                    />
                                )
                            else if (route.auth && !this.state.currentUser)
                                return null
                            else
                                return (
                                    <Route
                                        path={route.path}
                                        render={() => <route.component changeCurrentUser={this.setCurrentUser.bind(this)} />}
                                        // component={route.component}
                                    />
                                )
                        })
                    }
                    <Redirect to="/signup" />
                </Switch>
            </Router>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('root'));