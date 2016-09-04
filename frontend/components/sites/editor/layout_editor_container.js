import { connect } from 'react-redux';
import LayoutEditor from './layout_editor';
import { updateLayout, destroyComponent } from '../../../actions/component_actions';
import { savePage } from '../../../actions/page_actions';
import { map } from '../../../util/entity_utils';
import { openEditor } from '../../../actions/editor_actions';

const mapStateToProps = ({ components, loading, pages, editor, sites }, { params }) => ({
  loading: loading['page'],
  components: map(pages[`${params.siteId}/${params.pageId === undefined ? "" : params.pageId}`], 'components', components),
  params: params,
  locked: false,
  editor
});

const mapDispatchToProps = (dispatch, { params }) => ({
  updateLayout: layout => dispatch(updateLayout(layout)),
  destroyComponent: component => dispatch(destroyComponent(`${params.siteId}/${params.pageId === undefined ? "" : params.pageId}`, component)),
  savePage: () => dispatch(savePage(`${params.siteId}/${params.pageId === undefined ? "" : params.pageId}`)),
  openEditor: (i, inputs) => dispatch(openEditor(i, inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutEditor);
