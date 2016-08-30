import { connect } from 'react-redux';
import SitesIndex from './sites_index.jsx';
import { logout } from '../../actions/session_actions.js';
const mapStateToProps = ({ sites, session }) => ({
  sites: Object.keys(sites).map(id => sites[id]),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SitesIndex);
