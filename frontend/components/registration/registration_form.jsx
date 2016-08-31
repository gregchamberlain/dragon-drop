import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (this.props.loginForm) {
      this.props.login({email, password})
    } else {
      this.props.signup({email, password})
    }
  }

  update = (name) => {
    return (e) => {
      this.setState({[name]: e.target.value})
    }
  }

  render() {
    const confirm = this.props.loginForm ? "" : (
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={this.update("confirm")}
          value={this.state.confirm}/>
    );

    const link = this.props.loginForm ? (
      <Link to="/signup">Don't have an account? Sign Up</Link>
    ) : (
      <Link to="/login">Already have an account? Login</Link>
    );

    return (
      <form onSubmit={this.onSubmit} className="registration-form">
        {this.props.errors}
          <input
            autoFocus={true}
            type="email"
            placeholder="Email"
            onChange={this.update("email")}
            value={this.state.email}/>
          <input
            type="password"
            placeholder="Password"
            onChange={this.update("password")}
            value={this.state.password}/>
        {confirm}
        <div className="buttons">
          <button onClick={this.props.onCancel}>Cancel</button>
          <button type="submit">{this.props.loginForm ? "Login" : "Sign Up"}</button>
        </div>
        <div>{link}</div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
