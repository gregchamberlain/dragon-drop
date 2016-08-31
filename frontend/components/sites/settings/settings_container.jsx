import { connect } from 'react-redux';
import SiteSettings from './settings.jsx';
import { updateSite, destroySite } from '../../../actions/site_actions.js';

const mapStateToProps = (state, ownProps) => ({
  site: state.sites[ownProps.params.siteId]
});

const mapDispatchToProps = dispatch => ({
  update: site => dispatch(updateSite(site)),
  destroy: site => dispatch(destroySite(site)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteSettings);
