import React, { Component } from 'react'
import { login } from '../services/auth.service'

class Login extends Component {

    handleFormSubmit(e) {
        e.preventDefault()
        const { email, password } = e.target
        login({ email: email.value, password: password.value })
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <h1>Login</h1>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="Entrar!" />
            </form>
        )
    }
}

export default Login