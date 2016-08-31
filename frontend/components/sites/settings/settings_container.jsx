import { connect } from 'react-redux';
import SiteSettings from './settings.jsx';
import { updateSite } from '../../../actions/site_actions.js';

const mapStateToProps = (state, ownProps) => ({
  site: state.sites[ownProps.params.siteId]
});

const mapDispatchToProps = dispatch => ({
  update: site => dispatch(updateSite(site)),
  destroy: site => console.log("destroying site...", site)
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteSettings);
