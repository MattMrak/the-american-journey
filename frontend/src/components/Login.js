import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;
