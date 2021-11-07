import React from 'react';
import loginImage from '../../signin.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">LOGIN</div>
        <div className="content">
          <div className="image">
            <img src={loginImage} alt="login" />
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                className=""
                placeholder="username" 
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className="error">error message</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="password" 
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="error">error message</span>
            </div>
            <div className="form-group">
              <button type="button">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;