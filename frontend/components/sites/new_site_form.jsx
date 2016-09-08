import React, { Component, PropTypes } from 'react'
import LoadingPage from '../ui/loading_page.jsx';

export default class NewSiteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      identifier: "",
      changed: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading) {
      this.setState({name: "", description: ""})
    }
  }

  parseIdentifier = name => {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
  }

  update = name => e => {
    let identifier = this.state.identifier;
    if (name === 'name' && (!this.state.changed || this.state.identifier === '/')) {
      identifier = this.parseIdentifier(e.target.value)
      this.setState({name: e.target.value, identifier, changed: false})
    }
    if (name === 'identifier') this.setState({changed: true})
    if (name === 'identifier' && this.state.identifier === '/') return;
    this.setState({[name]: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    const { changed, ...site } = this.state
    this.props.createSite(site);
  }

  render() {
    return (
      <div className="new-site-form">
        <LoadingPage loading={this.props.loading} small={true}>
          <form onSubmit={this.submit}>
            <input
              placeholder="Site Name"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}/>
            <textarea
              placeholder="Description"
              value={this.state.description}
              onChange={this.update("description")}/>
            <input
              placeholder="Site Identifier (This cannot be changed later)"
              type="text"
              value={this.state.identifier}
              onChange={this.update("identifier")}/>
            <input type="checkbox" value={this.state.template} onChange={this.update('template')} />
            <button type="submit">Create</button>
          </form>
        </LoadingPage>
      </div>
    );
  }
}
