import { connect } from 'react-redux';
import HeaderBar from './header_bar.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
