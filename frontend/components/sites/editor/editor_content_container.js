import { connect } from 'react-redux';
import EditorContent from './editor_content';

const mapStateToProps = ({ editor }) => ({
  propsEditor: editor.current,
  catalog: editor.catalogOpen
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContent);
