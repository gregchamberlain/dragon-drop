import React, { Component, PropTypes } from 'react'
import LoadingPage from '../ui/loading_page.jsx';

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
            <button type="submit">Create</button>
          </form>
        </LoadingPage>
      </div>
    );
  }
}
