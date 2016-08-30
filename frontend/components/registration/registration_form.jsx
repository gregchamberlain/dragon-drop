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

  demo = () => {
    this.props.login({
      email: "demo@dragon-drop.com",
      password: "password"
    })
  }

  render() {
    const confirm = this.props.loginForm ? "" : (
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          onChange={this.update("confirm")}
          value={this.state.confirm}/>
      </div>
    );

    const link = this.props.loginForm ? (
      <Link to="/signup">Don't have an account? Sign Up</Link>
    ) : (
      <Link to="/login">Already have an account? Login</Link>
    );

    return (
      <form onSubmit={this.onSubmit}>
        {this.props.errors}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            onChange={this.update("email")}
            value={this.state.email}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={this.update("password")}
            value={this.state.password}/>
        </div>
        {confirm}
        <input type="submit" value={this.props.loginForm ? "Login" : "Sign Up"}/>
        <button onClick={this.demo}>Demo</button>
        <div>{link}</div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
