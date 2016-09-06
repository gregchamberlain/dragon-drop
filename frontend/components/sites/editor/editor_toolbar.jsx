import React, { Component } from 'react';
import Plus from 'react-icons/lib/fa/plus';
import Gear from 'react-icons/lib/fa/cog';
import PageSettings from '../pages/page_settings_container';

class EditorToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false
    }
  }

  openSettings = () => {
    this.setState({settings: true});
  }

  closeSettings = () => {
    this.setState({settings: false});
  }

  render() {
    const { pages, currentPage, changePage, children, savePage, preview, site,
      openCatalog, catalogOpen, closeCatalog, params } = this.props;
    return (
      <div>
        <div className='editor-content'>
          {children}
        </div>
        <div className='editor-toolbar'>
          <div
            className='toolbar-item action brand'
            onClick={catalogOpen ? closeCatalog : openCatalog}>
            <Plus className={`icon${catalogOpen ? " rotated" : ""}`}/>
          </div>
          <div className='toolbar-item brand'>{site.name}</div>
          <div className='toolbar-item'>/</div>
          <select value={currentPage} onChange={changePage}>
            { pages.map(page => (
              <option key={page.path} value={page.path}>{page.name}</option>
            ))}
            { pages.length >= 5 ? "" : <option key='new-page' value='/new-page'>New Page</option> }
          </select>
          <div className='flex-space'></div>
          <div
            className='toolbar-item action brand'
            onClick={this.state.settings ? this.closeSettings : this.openSettings}>
            <Gear className={`icon${this.state.settings ? " rotated" : ""}`}/>
            { this.state.settings ? (
              <div className="page-edit-wrapper">
                <PageSettings params={params} close={this.closeSettings}/>
              </div>
            ) : ""}
          </div>
          <div className='toolbar-item action' onClick={preview}>Preview</div>
          <div className='toolbar-item action' onClick={savePage}>Save</div>
        </div>

      </div>
    );
  }
}
// const EditorToolbar = ({ pages, currentPage, changePage,
//   children, savePage, preview, site, openCatalog, catalogOpen, closeCatalog }) => (
//
// );

export default EditorToolbar;
