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

    const matching = this.props.loginForm ? true : this.state.password === this.state.confirm

    const confirm = this.props.loginForm ? "" : (
        <input
          type="password"
          className={matching ? "" : "invalid"}
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
          <button type="submit" disabled={!matching}>
            {this.props.loginForm ? "Login" : "Sign Up"}
          </button>
          <button onClick={this.props.onCancel}>Cancel</button>
        </div>
        <div>{link}</div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
