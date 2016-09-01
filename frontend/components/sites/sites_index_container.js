import { connect } from 'react-redux';
import SitesIndex from './sites_index.jsx';
import { logout } from '../../actions/session_actions.js';
import { toArray } from '../../util/entity_utils.js';

const mapStateToProps = ({ sites }) => ({
  loading: sites.loading,
  sites: toArray(sites),
  title: 'My Websites',
  form: true,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SitesIndex);
