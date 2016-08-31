import React, { Component, PropTypes } from 'react'

export default class NewSiteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: ""
    };
  }

  update = name => e => {
    this.setState({[name]: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    this.props.createSite(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submit} className="new-site-form">
        <input
          placeholder="Site Name"
          type="text"
          value={this.state.name}
          onChange={this.update("name")}/>
        <textarea
          placeholder="Description"
          value={this.state.description}
          onChange={this.update("description")}/>
        <button type="submit">Create</button>
      </form>
    );
  }
}
