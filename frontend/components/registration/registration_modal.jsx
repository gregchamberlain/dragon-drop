import React from 'react';
import Modal from '../ui/modal.jsx';
import { withRouter } from 'react-router';
import RegistrationForm from './registration_form_container.js';
const RegistrationModal = ({ onClose, router }) => (
  <Modal
    title={router.isActive('/login') ? "Login" : "Sign Up"}
    onClose={() => router.push('/')}>
    <RegistrationForm loginForm={router.isActive('/login')}/>
  </Modal>
);

export default withRouter(RegistrationModal);
