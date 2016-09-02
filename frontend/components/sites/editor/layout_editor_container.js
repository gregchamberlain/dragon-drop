import { connect } from 'react-redux';
import LayoutEditor from './layout_editor';
import { map } from '../../../util/entity_utils.js'

const mapStateToProps = ({ components, loading, pages }, { params }) => ({
  loading: loading['page'],
  components: map(pages[params.pageId], 'components', components),
  locked: false,
  openEditor: () => console.log('opening editor'),
  removeItem: () => console.log('removing item'),
  changeLayout: () => {}
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutEditor);
