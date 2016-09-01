import React from 'react';
import { Link } from 'react-router';

const HeaderBar = ({ currentUser, logout }) => (
  <header className="home-header">
    <nav className="content">
      <Link to="/" className="brand">DRAGONDROP</Link>
      { currentUser ? <Link to="/sites" className="nav">My Websites</Link> : "" }
      <Link to="/templates" className="nav">Templates</Link>
      <div className="flex-space"/>
      { currentUser ? <a onClick={logout}>Logout</a> : "" }
      { !currentUser ? <Link to="signup">Sign Up</Link> : "" }
      { !currentUser ? <Link to="login" className="border">Login</Link> : "" }
    </nav>
  </header>
);

export default HeaderBar;
