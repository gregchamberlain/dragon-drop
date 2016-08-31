import React, { Component } from 'react';
import Form from './registration_form_container.js';
import { withRouter } from 'react-router';
import Close from 'react-icons/lib/fa/close';

class RegistrationLayout extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) this.close(e);
  }

  close = e => {
    e.preventDefault();
    this.props.router.push('/');
  }

  render() {
    return (
      <div className="registration-layout">
        <Form
          loginForm={this.props.router.isActive('/login')}
          onCancel={this.close}/>
        <Close className="close" onClick={this.close}/>
      </div>
    );
  }
}

export default withRouter(RegistrationLayout);
