import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
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

export default Signup;
