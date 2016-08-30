import React, { Component } from 'react';
import Toolbar from './ui/toolbar.jsx';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

const brand = <Link to="/">DragonDrop</Link>;
const right = [
  <Link to="/login">Login</Link>,
  <Link to="/signup">Sign Up</Link>,
];

const Home = ({ children, currentUser, router }) => {
  if (currentUser) router.push('/sites');
  return (
    <Toolbar right={right} brand={brand}>
      Home!!!
      {children}
    </Toolbar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(withRouter(Home));
