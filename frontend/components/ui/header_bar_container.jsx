import { connect } from 'react-redux';
import HeaderBar from './header_bar.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = ({ session, loading}) => ({
  currentUser: session.currentUser,
  loading: loading['logout'],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
