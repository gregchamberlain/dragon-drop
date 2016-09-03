import { connect } from 'react-redux';
import LayoutEditor from './layout_editor';
import { updateLayout, destroyComponent } from '../../../actions/component_actions';
import { savePage } from '../../../actions/page_actions';
import { map } from '../../../util/entity_utils';

const mapStateToProps = ({ components, loading, pages }, { params }) => ({
  loading: loading['page'],
  components: map(pages[params.pageId], 'components', components),
  locked: false,
  openEditor: () => console.log('opening editor'),
});

const mapDispatchToProps = (dispatch, { params }) => ({
  updateLayout: layout => dispatch(updateLayout(layout)),
  destroyComponent: component => dispatch(destroyComponent(component)),
  savePage: () => dispatch(savePage(params.pageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutEditor);
