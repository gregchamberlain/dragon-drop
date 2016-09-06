import React from 'react';
import LayoutEditor from './layout_editor_container';
import PropsEditor from '../../Editor/Editor';
import Catalog from '../../Catalog';
import { connect } from 'react-redux'

const EditorContent = ({ propsEditor, catalog, params, closeCatalog }) => (
  <div className="fill">
    <LayoutEditor params={params} />
    { propsEditor ? <PropsEditor /> : ""}
    { catalog ? <Catalog params={params} /> : "" }
  </div>
);

export default EditorContent;
