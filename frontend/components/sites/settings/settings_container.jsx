import { connect } from 'react-redux';
import SiteSettings from './settings.jsx';
import { updateSite, destroySite, deploySite } from '../../../actions/site_actions.js';

const mapStateToProps = ({ sites }, { params }) => ({
  site: sites[params.siteId]
});

const mapDispatchToProps = dispatch => ({
  update: (site, oldSite) => dispatch(updateSite(site, oldSite)),
  destroy: site => dispatch(destroySite(site)),
  deploy: site => dispatch(deploySite(site))
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteSettings);
