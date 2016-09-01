import { connect } from 'react-redux';
import SitesIndex from '../sites/sites_index.jsx';
import { toArray } from '../../util/entity_utils.js';

const mapStateToProps = ({ templates, loading }) => ({
  sites: toArray(templates),
  loading: loading['templates'],
  title: 'Website Templates',
  form: false,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SitesIndex);
