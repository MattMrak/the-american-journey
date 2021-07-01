import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import { connect } from 'react-redux';
// import '../index.js'
import { addUser, addUserBE } from '../reducers/actions';
class Signup extends Component {

    state = {
        user: ""
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.email]: evt.target.value
        })
      }
    
    handleSubmit = (evt) => {
        evt.preventDefault()
        // this.props.addUser(this.state)
        // this.props.addUserBE(this.state.user)
        this.props.history.push(`/home`)
      }

    render() {
        return (
            <div>
              <header className="App-header">
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user"></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        email="user"
                        // value={this.state.user}
                        value={this.user}
                        autoComplete="off"
                        id="user"
                        placeholder="Email"
                    />
                    <div>
                        <label htmlFor="password"></label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            password="password"
                            // value={this.state.user}
                            autoComplete="off"
                            id="user"
                            placeholder="Password"
                        />
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                    <button>Submit</button>
                  </form>
              </header>
              <Footer/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        users: () => { dispatch(addUserBE) }
    }
}

// export const addUserBE = (email) => {
//     console.log("from addUserBE", email)
//     return (dispatch) => {
//       fetch('http://localhost:3001/users',{
//              method:'POST',
//              headers: { 
//                  'Content-type': 'application/json',
//                  'accept': 'application/json'
//              },
//             body: JSON.stringify({
//                 email: email
//               })
//       })
//         .then(resp => resp.json())
//         .then(user => {
//         dispatch(addUser(user))
//       })
//     }
//   }
  
//   export const addUser = (newUser) => {
//     return {
//         type: "ADD_USER",
//         payload: newUser
//       }
//   }

// export default Signup;

export default connect(null, { addUserBE, addUser, mapDispatchToProps })(Signup);

// export default connect(null, mapDispatchToProps)(Signup);