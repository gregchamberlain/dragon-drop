import React, { Component } from 'react';
import Toolbar from './ui/toolbar.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions.js';

const brand = <Link to="/">DragonDrop</Link>;

const Home = ({ children, currentUser, loginAsGuest  }) => {
  return (
    <Toolbar right={[
      <Link to="/login">Login</Link>,
      <Link to="/signup">Sign Up</Link>,
    ]} brand={brand}>
      <div className="home-splash-image">
        <button className="demo-button" onClick={loginAsGuest}>demo</button>
        <h1>Build a better web</h1>
      </div>
      {children}
    </Toolbar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  loginAsGuest: () => dispatch(
    login({email: "demo@dragon-drop.com", password: "password"})
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
