import { connect } from 'react-redux';
import LayoutsIndex from './layouts_index.jsx';
import { requestLayouts } from '../actions/layout_actions.js';
import { receiveItems } from '../actions/item_actions.js';

const mapStateToprops = state => ({
  layouts: state.layouts.all
});

const mapDispatchToProps = dispatch => ({
  requestLayouts: () => dispatch(requestLayouts()),
  receiveItems: items => dispatch(receiveItems(items))
});

export default connect(mapStateToprops, mapDispatchToProps)(LayoutsIndex);
