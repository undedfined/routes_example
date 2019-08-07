import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from './components/Login'
import Signup from './components/Signup'

const history = createBrowserHistory()

const routes = [
    { path: '/login', component: Login, auth: false },
    { path: '/signup', component: Signup, auth: false },
    { path: '/home', component: null, auth: true }
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null
        }
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    {
                        routes.map(route => {
                            if (route.auth && this.state.currentUser)
                                return (
                                    <Route
                                        path={route.path}
                                        component={route.component}
                                    />
                                )
                            else if (route.auth && !this.state.currentUser)
                                return null
                            else
                                return (
                                    <Route
                                        path={route.path}
                                        component={route.component}
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