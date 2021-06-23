import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                <input type="text" name="email" placeholder="Email" />
                <label htmlFor="email">Email</label>
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
}

export default Login;
