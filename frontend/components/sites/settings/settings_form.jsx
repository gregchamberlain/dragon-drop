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
    this.props.update(this.state);
  }


  render() {

    const { site } = this.props;
    const unchanged = isEqual(site, this.state);

    return (
      <form className="site-settings-form">
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateState("name")} />
        <textarea
          placeholder="Description"
          value={this.state.description}
          onChange={this.updateState("description")} />
        <input
          type="text"
          value={this.state.identifier}
          onChange={this.updateState("identifier")} />
        <input type="checkbox" value={this.state.template} onChange={this.updateState('template')} />
        <button type="submit" disabled={unchanged} onClick={this.update}>Update</button>
        <button className="destroy-button" onClick={this.destroy}>delete site</button>
      </form>
    );
  }
}
