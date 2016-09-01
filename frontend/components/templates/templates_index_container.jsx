import { connect } from 'react-redux';
import SitesIndex from '../sites/sites_index.jsx';
import { toArray } from '../../util/entity_utils.js';

const mapStateToProps = state => ({
  sites: toArray(state.templates)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SitesIndex);
