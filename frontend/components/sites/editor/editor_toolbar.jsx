import React, { Component } from 'react';
import Plus from 'react-icons/lib/fa/plus';
import Gear from 'react-icons/lib/fa/cog';
import PageSettings from '../pages/page_settings_container';
import Joyride from 'react-joyride';
import Shepherd from 'tether-shepherd';
import Tether from 'tether';
import Tour from '../../../util/tour/tour';

const tour = new Tour();
tour.addStep({
  target: '.catalog-button',
  attachment: 'bottom left',
  className: 'top-left',
  title: 'Add Components',
  body: 'Click here to see components you can add to your page'
});

tour.addStep({
  target: '.catalog-item',
  attachment: 'right',
  className: 'left-middle',
  title: 'Add a component!',
});

tour.addStep({
  target: '.react-resizable-handle',
  attachment: 'bottom center',
  className: 'top-center',
  title: 'Resize your component!',
  event: 'mousedown',
  delay: 2000
});

tour.addStep({
  target: '.component-lock',
  attachment: 'bottom left',
  className: 'top-left',
  title: 'Lock Component',
  body: 'Lock a component to prevent accidental moving or resizing.'
});

tour.addStep({
  target: '.component-settings',
  attachment: 'bottom left',
  className: 'top-left',
  title: 'Component Properties',
  body: 'Adjust each components properties by clicking the gear or double clicking the component'
});

tour.addStep({
  target: '.save-button',
  attachment: 'bottom right',
  className: 'top-right',
  title: 'Dont forget to save!',
  body: 'Click here or use ctrl-s to save each page'
});

tour.addStep({
  target: '.site-settings-button',
  attachment: 'right',
  className: 'left-middle',
  title: 'Site Settings',
  timeout: 250,
  body: 'View Your site settings here'
});

class EditorToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false
    }
  }

  componentDidMount() {
    tour.start();
  }

  componentWillUnmount() {
    tour.hide();
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
            <Plus className={`catalog-button icon${catalogOpen ? " rotated" : ""}`}/>
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
            className='toolbar-item action brand page-settings-button'
            onClick={this.state.settings ? this.closeSettings : this.openSettings}>
            <Gear className={`icon${this.state.settings ? " rotated" : ""}`}/>
            { this.state.settings ? (
              <div className="page-edit-wrapper">
                <PageSettings params={params} close={this.closeSettings}/>
              </div>
            ) : ""}
          </div>
          <div className='toolbar-item action' onClick={preview}>Preview</div>
          <div className='toolbar-item action save-button' onClick={savePage}>Save</div>
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
