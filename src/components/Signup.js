import React, { Component } from 'react'
import { signup } from '../services/auth.service'

class Signup extends Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        const { name, email, password } = e.target
        signup({ name: name.value, email: email.value, password: password.value })
            .then(console.log)
            // .then(data => {
            //     console.log(data)
            // })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="Signup!" />
            </form>
        )
    }
}

export default Signup