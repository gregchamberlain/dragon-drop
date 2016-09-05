import { connect } from 'react-redux';
import LayoutEditor from './layout_editor';
import { updateLayout, destroyComponent } from '../../../actions/component_actions';
import { savePage } from '../../../actions/page_actions';
import { map } from '../../../util/entity_utils';
import { openEditor } from '../../../actions/editor_actions';
import { parsePageId } from '../../../util/router_utils.js';

const mapStateToProps = ({ components, loading, pages, editor, sites }, { params }) => ({
  params: params,
  site: sites[params.siteId],
  loading: loading['page'],
  components: map(pages[parsePageId(params)], 'components', components).filter(c => !c._destroy),
  locked: false,
  editor: editor.current
});

const mapDispatchToProps = (dispatch, { params }) => ({
  updateLayout: layout => dispatch(updateLayout(layout)),
  destroyComponent: component => dispatch(destroyComponent(parsePageId(params), component)),
  savePage: () => dispatch(savePage(parsePageId(params))),
  openEditor: (i, inputs) => dispatch(openEditor(i, inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutEditor);
