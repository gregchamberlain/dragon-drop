import { connect } from 'react-redux';
import SitePreview from './preview.jsx';
import { map } from '../../util/entity_utils.js'
import { parsePageId } from '../../util/router_utils.js';

const mapStateToProps = ({ loading, pages, components }, { params }) => ({
  loading: loading['site'],
  components: map(pages[parsePageId(params)], 'components', components)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SitePreview);
