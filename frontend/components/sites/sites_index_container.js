import { connect } from 'react-redux';
import SitesIndex from './sites_index.jsx';

const mapStateToProps = ({ sites }) => ({
  sites: Object.keys(sites).map(id => sites[id])
});

export default connect(mapStateToProps)(SitesIndex);
