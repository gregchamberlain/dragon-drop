import { connect } from 'react-redux';
import RegistrationForm from './registration_form.jsx';
import * as ACTIONS from '../../actions/session_actions.js';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(ACTIONS.login(user)),
  signup: user => dispatch(ACTIONS.signup(user))
});

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
