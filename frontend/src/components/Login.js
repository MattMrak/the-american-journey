import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                {/* <label>Email </label> */}
                <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                {/* <label>Password </label> */}
                <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;
