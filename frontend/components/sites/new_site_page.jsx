import React, { Component, PropTypes } from 'react'
import LoadingPage from '../ui/loading_page';
import { connect } from 'react-redux';
import SitesIndexItem from './sites_index_item';
import { toArray } from '../../util/entity_utils.js';
import { isObject } from 'lodash'
import { createSite } from '../../actions/site_actions';
import { cloneTemplate } from '../../actions/template_actions';

const BLANK_SITE = {id: 0, name: "Blank Site"};

class NewSitePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      template: BLANK_SITE
    }
  }

  selectTemplate = t => {
    this.setState({template: t});
  }

  update = name => e => {
    this.setState({[name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const { template, fromTemplate, ...site } = this.state;
    if (template.id !== 0) {
      this.props.create(site, template);
    } else {
      this.props.create(site);
    }
  }

  render() {

    const { loading, templates } = this.props

    return (
      <div className="fill">
        <form onSubmit={this.handleSubmit} className="new-site-form">
          <label>
            Name
            <input type="text" value={this.state.name} onChange={this.update("name")} />
          </label>
          <label>
            Description
            <textarea value={this.state.description} onChange={this.update("description")} />
          </label>
          <button type="submit">Create</button>
        </form>
        <div className="new-site-templates">
          <LoadingPage loading={loading}>
            <h2>Templates</h2>
            <div className="sites-index-items">
              <SitesIndexItem
                site={BLANK_SITE}
                template={false}
                onClick={this.selectTemplate}
                selected={this.state.template}/>
              { templates.map(template => (
                <SitesIndexItem
                key={template.id}
                site={template}
                template={false}
                onClick={this.selectTemplate}
                selected={this.state.template}/>
              ))}
            </div>
          </LoadingPage>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ templates, loading }) => ({
  templates: toArray(templates),
  loading: loading['templates']
});

const mapDispatchToProps = dispatch => ({
  create: (site, template) => dispatch(template ? cloneTemplate(site, template) : createSite(site))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSitePage);
