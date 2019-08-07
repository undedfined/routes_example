import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signup } from '../services/auth.service'

class Signup extends Component {
    handleFormSubmit(e) {
        e.preventDefault()
        const { name, email, password } = e.target
        signup({ name: name.value, email: email.value, password: password.value })
            .then(data => {
                console.log(data)
                this.props.history.push('/login')
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <h1>Signup</h1>
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="Signup!" />
            </form>
        )
    }
}

export default Signup
// export default withRouter(Signup)