import { connect } from 'react-redux';
import SiteSettings from './settings.jsx';

const mapStateToProps = (state, ownProps) => ({
  site: state.sites[ownProps.params.siteId]
});

const mapDispatchToProps = dispatch => ({
  update: site => console.log("updating site...", site),
  destroy: site => console.log("destroying site...", site)
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteSettings);
