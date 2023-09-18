import React, { Component } from 'react';
class UserSignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:"",
        }
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }
    handleSubmit(e) {
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        this.setState({username: this.usernameInput.current.value, password: this.passwordInput.current.value})
        e.preventDefault();
    }

    render() {
        return(
            
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" ref={this.usernameInput} />
                    </div>
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" ref={this.passwordInput} />
                    </div>
                    <div>
                    <button type="submit">Sign In</button>
                    </div>
                </form>
            
        );
    }
}
export default UserSignIn;
