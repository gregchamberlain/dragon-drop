import React, { Component } from 'react';
import Toolbar from './ui/toolbar.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions.js';

const brand = <Link to="/">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];
const Home = ({ children, loading, loginAsGuest  }) => {
  return (
    <div style={{height: '100%'}}>
      <header className="home-header">
        <nav className="content">
          <Link to="/" className="brand">DRAGONDROP</Link>
          <div className="flex-space"/>
          <Link to="signup">Sign Up</Link>
          <Link to="login" className="border">Login</Link>
        </nav>
      </header>
      <section className="home-section splash-image">
        <button className="demo-button" onClick={loginAsGuest}>
          { loading ? (
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          ) : "DEMO" }
          
        </button>
        <h1>Build a better web</h1>
      </section>
      {children}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.session.loading
});

const mapDispatchToProps = dispatch => ({
  loginAsGuest: () => dispatch(
    login({email: "demo@dragon-drop.com", password: "password"})
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
