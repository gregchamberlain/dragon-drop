import React, { Component, PropTypes } from 'react';
import { merge, isEqual } from 'lodash';

export default class SiteSettingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = merge({
      name: "",
      description: "",
      identifier: "",
      template: false,
    }, props.site);
  }

  updateState = name => e => {
    if (name === 'template') {
      this.setState({[name]: e.target.checked})
    } else {
      this.setState({[name]: e.target.value})
    }
  }

  destroy = e => {
    e.preventDefault();
    if (confirm("are you sure you want to delete this site?")) {
      this.props.destroy(this.state);
    }
  }

  update = e => {
    e.preventDefault();
    this.props.update(this.state, this.props.site);
  }

  deploy = e => {
    e.preventDefault();
    this.props.deploy(this.state);
  }


  render() {

    const { site } = this.props;
    const unchanged = isEqual(site, this.state);

    return (
      <div className="site-settings-form">

        <form className="site-settings-form">
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.updateState("name")} />
          </label>
          <label>
            Description
            <textarea
              placeholder="Description"
              value={this.state.description}
              onChange={this.updateState("description")} />
          </label>
          <label>
            Identifier
            <input
              disabled={true}
              type="text"
              value={this.state.identifier}
              onChange={this.updateState("identifier")} />
          </label>
          <label>
            Template
            <input type="checkbox" value={this.state.template} onChange={this.updateState('template')} />
          </label>
          <button type="submit" disabled={unchanged} onClick={this.update}>Update</button>
        </form>
      </div>
    );
  }
}
